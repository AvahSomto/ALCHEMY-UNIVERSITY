const express = require('express');
const verifyProof = require('../utils/verifyProof');

const port = 1225;

const app = express();
app.use(express.json());
// Think of the server as the _verifier_ here. It needs to verify that the `name` passed by the client is in the `MERKLE_ROOT`. If it is, then we can send the gift!


// TODO: hardcode a merkle root here representing the whole nice list
const MERKLE_ROOT = 'ddd59a2ffccddd60ff47993312821cd57cf30f7f14fb82937ebe2c4dc78375aa';
// This was provided via the example script in the utils directory

app.post('/gift', (req, res) => {
  // grab the parameters from the front-end here
  const body = req.body;

  // TODO: prove that a name is in the list
  if(verifyProof(body.proof, body.name, MERKLE_ROOT)) {
    res.send("You got a toy robot!");
  }
  else {
    res.send("You are not on the list :(");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});