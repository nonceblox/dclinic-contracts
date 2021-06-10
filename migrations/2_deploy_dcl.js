const DCLToken = artifacts.require("DCLToken");

module.exports = function (deployer, network) {
  if (network == "mumbai_testnet" || network == "matic_mainnet") return;
  deployer.deploy(DCLToken);
};
