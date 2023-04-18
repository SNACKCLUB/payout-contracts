import { ethers } from 'hardhat';
import { assert, expect } from 'chai';
import { Contract } from 'ethers';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { parseEther } from 'ethers/lib/utils';

describe('RewardControl', () => {
  let rewardControl: Contract;
  let roleControl: Contract;
  let owner: SignerWithAddress;
  let admin: SignerWithAddress;
  let operator: SignerWithAddress;

  beforeEach(async () => {
    [owner, admin, operator] = await ethers.getSigners();

    const RoleControlFactory = await ethers.getContractFactory('RoleControl');
    roleControl = await RoleControlFactory.deploy();
    await roleControl.deployed();

    const RewardControlFactory = await ethers.getContractFactory(
      'RewardControl',
      {
        signer: owner,
      }
    );
    rewardControl = await RewardControlFactory.deploy();
    await rewardControl.deployed();
    await rewardControl.connect(owner).addAdmin(admin.address);
  });

  it('should store a reward', async () => {
    const rewardArgs = {
      discriminator: 'test',
      amount: 100,
      tokenContract: ethers.constants.AddressZero,
      claimableAt: Math.floor(Date.now() / 1000),
      receiver: admin.address,
    };

    await rewardControl.storeRewards([rewardArgs]);

    const hashedWallet = await rewardControl.hashAddressAndString(
      admin.address,
      'test'
    );
    const storedReward = await rewardControl.reward(hashedWallet);

    expect(storedReward.amount).to.equal(rewardArgs.amount);
    expect(storedReward.tokenContract).to.equal(rewardArgs.tokenContract);
    expect(storedReward.claimableAt).to.equal(rewardArgs.claimableAt);
  });

  it('should renew a reward', async () => {
    const discriminator = 'test';
    const amount = parseEther('1');
    const tokenContract = owner.address;
    const claimableAt = Math.floor(Date.now() / 1000) + 86400;
    const receiver = admin.address;

    await rewardControl.storeRewards([
      {
        discriminator,
        amount,
        tokenContract,
        claimableAt,
        receiver,
      },
    ]);

    const hashedWallet = await rewardControl.hashAddressAndString(
      receiver,
      discriminator
    );
    await rewardControl.connect(admin).renewReward(discriminator, receiver);

    const renewedAt = Math.floor(Date.now() / 1000);
    const newReward = await rewardControl.reward(hashedWallet);
    assert.closeTo(newReward.claimableAt.toNumber(), renewedAt, 10);
  });

  it('should store multiple rewards', async () => {
    const rewardArgs1 = {
      discriminator: 'test1',
      amount: 100,
      tokenContract: ethers.constants.AddressZero,
      claimableAt: Math.floor(Date.now() / 1000),
      receiver: admin.address,
    };

    const rewardArgs2 = {
      discriminator: 'test2',
      amount: 200,
      tokenContract: ethers.constants.AddressZero,
      claimableAt: Math.floor(Date.now() / 1000),
      receiver: admin.address,
    };

    await rewardControl.storeRewards([rewardArgs1, rewardArgs2]);

    const hashedWallet1 = await rewardControl.hashAddressAndString(
      admin.address,
      'test1'
    );
    const storedReward1 = await rewardControl.reward(hashedWallet1);

    const hashedWallet2 = await rewardControl.hashAddressAndString(
      admin.address,
      'test2'
    );
    const storedReward2 = await rewardControl.reward(hashedWallet2);
    expect(storedReward1.amount).to.equal(rewardArgs1.amount);
    expect(storedReward1.tokenContract).to.equal(rewardArgs1.tokenContract);
    expect(storedReward1.claimableAt).to.equal(rewardArgs1.claimableAt);

    expect(storedReward2.amount).to.equal(rewardArgs2.amount);
    expect(storedReward2.tokenContract).to.equal(rewardArgs2.tokenContract);
    expect(storedReward2.claimableAt).to.equal(rewardArgs2.claimableAt);
  });

  it('should hash an address and string correctly', async () => {
    const hashedValue = await rewardControl.hashAddressAndString(
      admin.address,
      'test'
    );
    const expectedHash = ethers.utils.sha256(
      ethers.utils.concat([
        ethers.utils.arrayify(admin.address),
        ethers.utils.toUtf8Bytes('test'),
      ])
    );

    expect(hashedValue).to.equal(expectedHash);
  });
});
