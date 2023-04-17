import { ethers } from 'hardhat';

async function main() {
  const SnackclubTournamentsPayout = await ethers.getContractFactory('SnackclubTournamentsPayout');
  const snackclubTournamentsPayout = await SnackclubTournamentsPayout.deploy();

  await snackclubTournamentsPayout.deployed();

  console.log('Snackclub Tournament sPayout deployed to:', snackclubTournamentsPayout.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
