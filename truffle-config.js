const HDWalletProvider = require("@truffle/hdwallet-provider");
const SECRET = require("./.secret.json");
require("dotenv").config();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    test: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    mumbai_testnet: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: SECRET.privateKeys,
          providerOrUrl: `https://rpc-mumbai.matic.today`,
          addressIndex: 0
        }),
      network_id: "80001",
    },
    matic_mainnet: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: SECRET.privateKeys,
          providerOrUrl: `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
          addressIndex: 0
        }),
      network_id: "137",
    },
    mainnet: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: SECRET.privateKeys,
          providerOrUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
          addressIndex: 0
        }),
      network_id: "1",
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: SECRET.privateKeys,
          providerOrUrl: `https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
          addressIndex: 0
        }),
      network_id: "3",
    }
    // @todo - goerli
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  compilers: {
    solc: {
      version: "0.6.12"
    }
  }
}