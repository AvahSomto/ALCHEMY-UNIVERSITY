const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

// Think of the client as the _prover_ here.
// It needs to prove to the server that some `name` is in the `MERKLE_ROOT` on the server.

async function main() {
  // TODO: how do we prove to the server we're on the nice list? 
  const name = 'Norman Block';
  const merkleTree = new MerkleTree(niceList);
  const index = niceList.findIndex(n => n === name);
  const proof = merkleTree.getProof(index);

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
    proof: proof,
    name: name
  });

  console.log({ gift });
}

main();