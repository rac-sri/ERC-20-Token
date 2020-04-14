# ERC-20-Token
###  Own crytocurrency based on ERC 20 standards


### Resources and papers
 * [ERC20](https://eips.ethereum.org/EIPS/eip-20)
 * [Original Proposal](https://github.com/ethereum/wiki/wiki/Standardized_Contract_APIs/499c882f3ec123537fc2fccd57eaa29e6032fe4a)
 * [dsmath](https://github.com/dapphub/ds-math)
 * [Rinkeby ether tokens](https://faucet.rinkeby.io/)
 
### ICO
An initial coin offering (ICO) or initial currency offering is a type of funding using cryptocurrencies. It is often a form of crowdfunding, however a private ICOs which does not seek public investment is also possible. In an ICO, a quantity of cryptocurrency is sold in the form of "tokens" ("coins") to speculators or investors, in exchange for legal tender or other (generally established and more stable) cryptocurrencies such as Bitcoin or Ethereum. The tokens are promoted as future functional units of currency if or when the ICO's funding goal is met and the project successfully launches.

### Installation

##### For client side Application : **npm run dev**

##### To connect to network:

1. npm i
2. geth --rinkeby --rpc --rpcapi="personal,eth,nerwork,web3,net" --ipcpath "/home/rachit/.ethereum/geth.ipc"   <!--Replace the ipcpath according to you own machine, this setup is for debian based linux distro-->
3. geth --rinkeby account new <!--Or login with an existing account ( geth account import <keyfile>) -->
4. geth --rinkeby --unlock <account public key>
Alternatively :  geth --rinkeby --unlock 0x36eded82e9495917e6f4cd4b7fa2645cf6e0537a --rpc --rpcapi="personal,eth,nerwork,web3,net" --ipcpath "/home/rachit/.ethereum/geth.ipc" --allow-insecure-unlock
Or After geth attach : personal.unlockAccount(eth.accounts[0])
5. geth attach <!--In a new terminal instance-->


##### Migrating:

* truffle migrate --reset --compile-all --network rinkeby

### Usefull Commands

After geth attach:
1. eth.accounts
2. eth.syncing