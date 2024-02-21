const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';
const merkleTree = new MerkleTree(niceList);

async function main() {
  if (process.argv.length != 3) {
    console.log("Usage: node client/index <Person's name>.\nBe careful in case the name contains a special charactor such as space!!\nExample: % node client/index \"Raymond Dickens\"");
  } else {
    const name = process.argv[2];
    const { data: gift } = await axios.post(`${serverUrl}/gift`, {
      name: name,
      proof: merkleTree.getProof(niceList.findIndex(n => n === name))
    });

    console.log({ gift });
  }
}

main();