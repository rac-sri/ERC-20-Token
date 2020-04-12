var Token = artifacts.require('Token.sol');

contract('DappToken',function(accounts){
    it('sets the total supply upon deployment', function(){
         return Token.deployed().then(function(instance){
             var totalInstance = instance;
             return totalInstance.totalSupply();

         }).then(function(totalSupply){
             assert.equal(totalSupply.toNumber(),1000000,'sets the total supply too 1,000,000');
         })

    })
})