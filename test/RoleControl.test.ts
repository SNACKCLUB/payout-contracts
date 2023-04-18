import { ethers } from 'hardhat';
import { expect } from 'chai';
import { Contract } from 'ethers';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';

describe('RoleControl', () => {
  let roleControl: Contract;
  let owner: SignerWithAddress;
  let admin: SignerWithAddress;
  let admin2: SignerWithAddress;
  let operator: SignerWithAddress;
  let operator2: SignerWithAddress;

  beforeEach(async () => {
    [owner, admin, admin2, operator, operator2] = await ethers.getSigners();
    const RoleControlFactory = await ethers.getContractFactory('RoleControl');
    roleControl = await RoleControlFactory.deploy();
    await roleControl.deployed();
  });

  it('should assign owner as the admin', async () => {
    const DEFAULT_ADMIN_ROLE = await roleControl.DEFAULT_ADMIN_ROLE();
    expect(await roleControl.hasRole(DEFAULT_ADMIN_ROLE, owner.address)).to.be
      .true;
  });

  it('should add an operator', async () => {
    const OPERATOR_ROLE = ethers.utils.id('operator');
    await roleControl.connect(owner).addOperator(operator.address);
    expect(await roleControl.hasRole(OPERATOR_ROLE, operator.address)).to.be
      .true;
  });

  it('should remove an operator', async () => {
    const OPERATOR_ROLE = ethers.utils.id('operator');
    await roleControl.connect(owner).addOperator(operator.address);
    await roleControl.connect(owner).addOperator(operator2.address);

    expect(await roleControl.hasRole(OPERATOR_ROLE, operator.address)).to.be
      .true;
    expect(await roleControl.hasRole(OPERATOR_ROLE, operator2.address)).to.be
      .true;

    await roleControl.connect(owner).removeOperator(operator.address);
    expect(await roleControl.hasRole(OPERATOR_ROLE, operator.address)).to.be
      .false;
    expect(await roleControl.hasRole(OPERATOR_ROLE, operator2.address)).to.be
      .true;
  });

  it('should revert when a non-admin tries to add an operator', async () => {
    await expect(
      roleControl.connect(operator).addOperator(operator.address)
    ).to.be.revertedWith('Only admin can execute this function');
  });

  it('should revert when a non-admin tries to remove an operator', async () => {
    await roleControl.connect(owner).addOperator(operator.address);
    await expect(
      roleControl.connect(operator).removeOperator(operator.address)
    ).to.be.revertedWith('Only admin can execute this function');
  });

  it('should add an admin', async () => {
    const ADMIN_ROLE = await roleControl.ADMIN_ROLE();
    await roleControl.connect(owner).addAdmin(admin.address);
    expect(await roleControl.hasRole(ADMIN_ROLE, admin.address)).to.be.true;
  });

  it('should remove an admin', async () => {
    const ADMIN_ROLE = await roleControl.ADMIN_ROLE();
    await roleControl.connect(owner).addAdmin(admin.address);
    await roleControl.connect(owner).addAdmin(admin2.address);

    expect(await roleControl.hasRole(ADMIN_ROLE, admin.address)).to.be.true;
    expect(await roleControl.hasRole(ADMIN_ROLE, admin2.address)).to.be.true;

    await roleControl.connect(owner).removeAdmin(admin.address);
    expect(await roleControl.hasRole(ADMIN_ROLE, admin.address)).to.be.false;
    expect(await roleControl.hasRole(ADMIN_ROLE, admin2.address)).to.be.true;
  });

  it('should revert when a non-admin tries to add an admin', async () => {
    await expect(
      roleControl.connect(operator).addAdmin(admin.address)
    ).to.be.revertedWith('Only admin can execute this function');
  });

  it('should revert when a non-admin tries to remove an admin', async () => {
    await roleControl.connect(owner).addAdmin(admin.address);
    await expect(
      roleControl.connect(operator).removeAdmin(admin.address)
    ).to.be.revertedWith('Only admin can execute this function');
  });
});
