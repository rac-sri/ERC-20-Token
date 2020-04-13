var Token = artifacts.require('Token.sol');
contract('Token',function(accounts){
    var tokenInstance;
    it('intializes the contract with the correct values',function(){
        return Token.deployed().then(function(instance){
            tokenInstance = instance;
            return tokenInstance.name();
        }).then(function(name){
            assert.equal(name,'Token' , 'has the correct name');
            return tokenInstance.symbol();
        })
        .then(function(symbol){
            assert.equal(symbol,'Token','has the correct symbol')
            return tokenInstance.standard();
        })
        .then(function(standard){
            assert.equal(standard , 'Token v1')

        })
    })
    it('sets the total supply upon deployment', function(){
         return Token.deployed().then(function(instance){
            tokenInstance = instance;
             return tokenInstance.totalSupply();

         }).then(function(totalSupply){
             assert.equal(totalSupply.toNumber(),1000000,'sets the total supply too 1,000,000');
             return tokenInstance.balanceOf(accounts[0])
         }).then(function(adminBalance){
             assert.equal(adminBalance.toNumber(),1000000,'it allocates the initial supply to the admin')
         }
    )
})

it('tranfers of token ownership',function(){
    return Token.deployed().then(function(instance){
        tokenInstance = instance;
        return tokenInstance.transfer.call(accounts[1],9999999999999);

    }).then(assert.fail).catch(function(error){
        assert(error.message.indexOf('revert') >= 0, 'error message must contain revert');
        return tokenInstance.transfer.call(accounts[1],250000, {from:accounts[0]})
    }).then(function(success){
        assert.equal(success,true,'it returns true');
        return tokenInstance.transfer(accounts[1],250000,{from:accounts[0]})
    })
    .then(function(reciept)
    {
        assert.equal(reciept.logs.length,1,'triggers one event');
        assert.equal(reciept.logs[0].event,'Transfer','transfer event triggered');
        assert.equal(reciept.logs[0].args.from,accounts[0],'logs the account of sender');
        assert.equal(reciept.logs[0].args.to , accounts[1],'logs the account of reciever');
        assert.equal(reciept.logs[0].args.value.toNumber(),250000,'logs the transfer amount');
        return tokenInstance.balanceOf(accounts[1])
    })
    
    .then(function(reciept){
        return tokenInstance.balanceOf(accounts[1]);
    }).then(function(balance){
        assert.equal(balance.toNumber(),250000,'add the amounts to the recieving account');
        return tokenInstance.balanceOf(accounts[0])
    }).then(function(balance){
        assert.equal(balance.toNumber(),750000,'deducts the amount form the sending acount')
    })
})
})