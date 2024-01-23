### Table of Contents

1. [Installation](#installation)
2. [Project Motivation](#motivation)
3. [File Description](#files)
4. [Results](#results)
5. [Licensing, Authors, and Acknowledgements](#licensing)

## Installation <a name="installation"></a>

The libaries,tools,frameworks used are NPM 10.2.4, React, ReactDOM, Chai, ethers.js, Web3Provider, useContext, async/await, and HTML/CSS.
The platform used was VS Code. The project should run just fine with NPM 10.*.

## Project Motivation<a name="motivation"></a>

For this project, I created a dApp to deploy an Escrow Contract Instance so as to approve the Escrow as the Arbiter.
Once approved I need to

1. Run the dApp on a Live Testnet.
2. Style the dApp by changing the HTML and working with the CSS and adding some JavaScript.
3. Accept the deposit as ether instead of wei.
4. Creating a server that will keep track of all the deployed Escrow Smart Contracts.
5.  Modify the Escrow solidity file in contracts folder.
   

## File Descriptions <a name="files"></a>

There are four folders in the escrow-hardhat folder 'app', 'contracts', 'server', and 'test' folder.
/app - contains the front-end application
/contracts - contains the solidity contract
/tests - contains tests for the solidity contract
/server - keeps track of all the deployed Escrow Smart Contracts

## Results<a name="results"></a>

The main findings of the code is that the arbiter acts as an escrow agent for the transaction between the depositor and the beneficiary
The depositor will send funds to the arbiter, the arbiter will send the purchase to the beneficiary of the transaction, 
if successful, the service will be delievered by the beneficiary.
MetaMask was used to keep the private key secure.


## Licensing, Authors, Acknowledgements<a name="licensing"></a>

Thanks to Jrhite at Alchemy University for the starter code.
