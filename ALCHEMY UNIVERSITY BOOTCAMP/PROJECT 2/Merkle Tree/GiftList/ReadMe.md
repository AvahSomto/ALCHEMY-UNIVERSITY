### Table of Contents

1. [Installation](#installation)
2. [Project Motivation](#motivation)
3. [File Description](#files)
4. [Results](#results)
5. [Licensing, Authors, and Acknowledgements](#licensing)

## Installation <a name="installation"></a>

The libaries used for this project are axios, express, and ethereum-cryptography.The code should run with no issues using Node.js 20.*.

## Project Motivation<a name="motivation"></a>

For this project, I am building an application which gives out gifts, but only to names on the list. 
The catch is that on the server I am only allowed to store one 32 byte value in the server memory. 
This 32 byte value has to be enough for the server to be able to determine who is on the list.
   

## File Descriptions <a name="files"></a>

There are three folders in this project. They are the 'client', 'server' and the 'utils' folder. 
The client is the prover, It needs to prove to the server that some `name` is in the `MERKLE_ROOT` on the server.
The server is the verifier, It needs to verify that the `name` passed by the client is in the `MERKLE_ROOT`. 
If it is, then we can send the gift! 
The utils folder contains everything needed for the Merkle Tree.
The example.js file shows how to create a root, create a proof, and verify that proof.
The MerkleTree implementation has been modified so you won't have to!

## Results<a name="results"></a>

In this project, the goal is to build an application that gives out gifts only to names on the list while storing only one 32-byte value in the server memory. 
The 32-byte value is used to enable the server to verify if a specific name is on the list, without needing to store the entire list in memory.
To achieve this, the project aims to implement a Merkle tree-based solution, where the client acts as the prover and the server acts as the verifier. 
The client is responsible for providing a cryptographic proof (Merkle tree proof) to the server to demonstrate that a specific name is on the list. 
The server, with minimal information (the 32-byte value), should be able to verify the proof and determine if the name sent from the client is actually in the list.
The use of the Merkle tree and cryptographic proofs allows for efficient verification of the inclusion of a name in the list without the need to store the entire list on the server. 
This approach ensures that the server can make the verification with minimal memory usage, as required.


## Licensing, Authors, Acknowledgements<a name="licensing"></a>

Thanks to Dan at Alchemy University for the starter code.
