# Project Gift List

The objective of this project is to implement the feature of checking a given person's name is in the list of nice persons,
making use of Merkle tree and extending the server/client and utils prototype code provided by Alchemy University.

In the setting of this project, the client is the prover and the server is the verifier.
The client has a list of nice persons, and hence is capable of generating a proof that the Merkle tree of the list of nice persons indeed contains an arbitrary nice person.
On the other hand, the server knows the root of the Merkle tree of the nice person's list and how to verify the proof, but nothing more about the content of the list of nice persons.

The client sends to the server the following two data
- a name of a person who is willing to get a gift
- a proof that this person is in the Merkle tree of the nice persons.
and in case the server verified the proof, the gift is sent back.

# About the implementation

## client/index.js

- L6 Creating a Merkle tree for the list of nice persons.
- In the main function, it takes a command line argument, which is a person's name, and then at L16, it generates a proof that the person is in the list of nice persons.
- L17 Posting the request to the server to check the proof.

## server/index.js
- L9 The Merkle root is hard coded.  It is only the information about the nice person's list the server knows.
- L14 Verifying the proof sent from the client.
- L15 Cheking the result of verification, then it gives a gift (at L16) in case the successful verification, or otherwise a message saying the person is not in the list (at L19).

The rest of this README is the original README provided by Alchemy University.

# Gift List

To get started with the repository, clone it and then run `npm install` in the top-level directory to install the depedencies.

There are three folders in this repository:

## Client

You can run the client from the top-level directory with `node client/index`. This file is a script which will send an HTTP request to the server.

Think of the client as the _prover_ here. It needs to prove to the server that some `name` is in the `MERKLE_ROOT` on the server. 

## Server

You can run the server from the top-level directory with `node server/index`. This file is an express server which will be hosted on port 1225 and respond to the client's request.

Think of the server as the _verifier_ here. It needs to verify that the `name` passed by the client is in the `MERKLE_ROOT`. If it is, then we can send the gift! 

## Utils

There are a few files in utils:

- The `niceList.json` which contains all the names of the people who deserve a gift this year (this is randomly generated, feel free to add yourself and others to this list!)
- The `example.js` script shows how we can generate a root, generate a proof and verify that some value is in the root using the proof. Try it out from the top-level folder with `node/example.js`
- The `MerkleTree.js` should look familiar from the Merkle Tree module! This one has been modified so you should not have to deal with any crypto type conversion. You can import this in your client/server
- The `verifyProof.js` should also look familiar. This was the last stage in the module. You can use this function to prove a name is in the merkle root, as show in the example.
