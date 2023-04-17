import '@nomicfoundation/hardhat-toolbox';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';

import * as dotenv from 'dotenv';

dotenv.config();

import { HardhatUserConfig } from 'hardhat/config';

const { WALLET_PRIVATE_KEY, MUMBAI_ALCHEMY_KEY } = process.env;

const POLYGON_MUMBAI_API_URL = `https://polygon-mumbai.g.alchemy.com/v2/${MUMBAI_ALCHEMY_KEY}`;

const config: HardhatUserConfig = {
  solidity: '0.8.11',
  defaultNetwork: 'polygon_mumbai',
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: POLYGON_MUMBAI_API_URL,
      accounts: [`0x${WALLET_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: 'CMS1RZQQR43M72IW6NUGI2ZEYKZA9HU7FY',
  },
};

export default config;
