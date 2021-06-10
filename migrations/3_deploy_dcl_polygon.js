const PolygonDCLToken = artifacts.require("PolygonDCLToken");

module.exports = function (deployer, network) {
  if (network == "mainnet" || network == "ropsten") return;
  deployer.deploy(PolygonDCLToken, "0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa");
};
