const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require("fs");
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",
      gasLimit: 10000000,
      gas: 10000000,
    },
    // matic: {
    //   provider: () =>
    //     new HDWalletProvider(
    //       mnemonic,
    //       `https://matic-mumbai.chainstacklabs.com`
    //     ),
    //   network_id: 80001,
    //   confirmations: 2,
    //   timeoutBlocks: 200,
    //   skipDryRun: true,
    //   chainId: 80001,
    // },
    // sepolia

    sepolia: {
      provider: new HDWalletProvider(
        mnemonic,
        "https://eth-sepolia.g.alchemy.com/v2/klODvcjL6ZzA-6aPRIvNNLoPB20xmv-P"
      ),
      network_id: 11155111,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      gasPrice: 24926022802,
      // websockets: true,
    },
  },
  contracts_directory: "./contracts",
  contracts_build_directory: "./abis",
  compilers: {
    solc: {
      version: "^0.8.6",
      optimizer: {
        // enabled: true,
        // runs: 200,
      },
    },
  },
  api_keys: {
    etherscan: "MY_API_KEY",
  },
  plugins: ["truffle-plugin-verify"],

  db: {
    enabled: false,
  },
};
