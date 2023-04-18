import { ethers } from 'hardhat';
import { Contract } from 'ethers';
import { expect } from 'chai';
import { parseEther } from 'ethers/lib/utils';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';

describe('SnackclubTournamentsPayout', () => {
  let owner: SignerWithAddress;
  let admin: SignerWithAddress;
  let operator: SignerWithAddress;
  let user: SignerWithAddress;
  let payout: Contract;
  let rewardControl: Contract;
  let mockToken: Contract;

  beforeEach(async () => {
    [owner, admin, operator, user] = await ethers.getSigners();

    const RewardControlFactory = await ethers.getContractFactory(
      'RewardControl'
    );
    rewardControl = await RewardControlFactory.deploy();
    await rewardControl.deployed();

    // Grant admin role to the admin address
    await rewardControl.connect(owner).addAdmin(admin.address);

    const PayoutFactory = await ethers.getContractFactory(
      'SnackclubTournamentsPayout'
    );
    payout = await PayoutFactory.deploy();
    await payout.deployed();

    await payout.connect(owner).addAdmin(admin.address);

    const MockTokenFactory = await ethers.getContractFactory('MockToken');
    mockToken = await MockTokenFactory.deploy(parseEther('10000'));
    await mockToken.deployed();

    await mockToken.transfer(admin.address, parseEther('5000'));
  });

  it('should allow admin to deposit tokens', async () => {
    const initialBalance = await mockToken.balanceOf(admin.address);

    await mockToken.connect(admin).approve(payout.address, parseEther('1000'));

    await payout
      .connect(admin)
      .depositToken(parseEther('1000'), mockToken.address);

    const contractBalance = await mockToken.balanceOf(payout.address);
    const adminBalance = await mockToken.balanceOf(admin.address);

    expect(contractBalance).to.equal(parseEther('1000'));
    expect(adminBalance).to.equal(initialBalance.sub(parseEther('1000')));
  });

  it('should allow admin to withdraw tokens', async () => {
    await mockToken.connect(admin).approve(payout.address, parseEther('1000'));
    await payout
      .connect(admin)
      .depositToken(parseEther('1000'), mockToken.address);

    const initialBalance = await mockToken.balanceOf(admin.address);

    await payout.connect(admin).withdraw(parseEther('500'), mockToken.address);

    const contractBalance = await mockToken.balanceOf(payout.address);
    const adminBalance = await mockToken.balanceOf(admin.address);

    expect(contractBalance).to.equal(parseEther('500'));
    expect(adminBalance).to.equal(initialBalance.add(parseEther('500')));
  });

  it('should not allow non-admin to withdraw tokens', async () => {
    await mockToken.connect(admin).approve(payout.address, parseEther('1000'));
    await payout
      .connect(admin)
      .depositToken(parseEther('1000'), mockToken.address);

    await expect(
      payout.connect(user).withdraw(parseEther('500'), mockToken.address)
    ).to.be.revertedWith('Only admin can execute this function');
  });

  it('should not allow non-admin or non-operator to deposit tokens', async () => {
    await mockToken.connect(user).approve(payout.address, parseEther('1000'));

    await expect(
      payout.connect(user).depositToken(parseEther('1000'), mockToken.address)
    ).to.be.revertedWith('Only admin or operator can execute this function');
  });

  it('should allow admin to create rewards', async () => {
    // Store rewards
    await payout.connect(admin).storeRewards([
      {
        discriminator: 'test1',
        amount: parseEther('100'),
        tokenContract: mockToken.address,
        claimableAt: Math.floor(Date.now() / 1000) + 86400,
        receiver: user.address,
      },
      {
        discriminator: 'test2',
        amount: parseEther('200'),
        tokenContract: mockToken.address,
        claimableAt: Math.floor(Date.now() / 1000) + 86400,
        receiver: user.address,
      },
    ]);

    const hashedWallet1 = await payout.hashAddressAndString(
      user.address,
      'test1'
    );
    const hashedWallet2 = await payout.hashAddressAndString(
      user.address,
      'test2'
    );

    const reward1 = await payout.reward(hashedWallet1);
    const reward2 = await payout.reward(hashedWallet2);

    expect(reward1.amount).to.equal(parseEther('100'));
    expect(reward1.tokenContract).to.equal(mockToken.address);

    expect(reward2.amount).to.equal(parseEther('200'));
    expect(reward2.tokenContract).to.equal(mockToken.address);
  });

  it('should not allow users to claim rewards before the claimableAt timestamp', async () => {
    const block = await ethers.provider.send('eth_getBlockByNumber', [
      'latest',
      false,
    ]);
    const currentTime = parseInt(block.timestamp, 16);
    await ethers.provider.send('evm_increaseTime', [29 * 24 * 60 * 60]);
    await ethers.provider.send('evm_mine', []);

    const claimableAt = currentTime + 86400 * 30;

    await payout.connect(admin).storeRewards([
      {
        discriminator: 'test13',
        amount: parseEther('100'),
        tokenContract: mockToken.address,
        claimableAt: claimableAt,
        receiver: user.address,
      },
    ]);

    await mockToken.connect(admin).approve(payout.address, parseEther('1000'));
    await payout
      .connect(admin)
      .depositToken(parseEther('1000'), mockToken.address);

    await ethers.provider.send('evm_increaseTime', [28 * 24 * 60 * 60]);
    await ethers.provider.send('evm_mine', []);

    await ethers.provider.send('evm_increaseTime', [29 * 24 * 60 * 60]);
    await ethers.provider.send('evm_mine', []);

    await expect(payout.connect(user).claimReward('test13')).to.be.revertedWith(
      'This reward is so old to get claimed'
    );

    await payout.connect(owner).renewReward('test13', user.address);

    await expect(payout.connect(user).claimReward('test13')).to.emit(
      payout,
      'RewardClaimed'
    );
  });
});
