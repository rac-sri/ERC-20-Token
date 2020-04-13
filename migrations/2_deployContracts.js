const Token = artifacts.require("Token");
const TokenSale = artifacts.require('TokenSale');
var tokenprice = 100000000000000;

module.exports = async function(deployer) {
  await deployer.deploy(Token , 1000000);
  await deployer.deploy(TokenSale , Token.address , tokenprice);

};
