//this server want to share AES key with the client
//Imagine everything in this server folder is in the private space
//of the server (e.g server disk)

const crypto = require("node:crypto");

const fs = require("node:fs");

// const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
//   modulusLength: 1024,
//   publicKeyEncoding: {
//     type: "spki",
//     format: "pem",
//   },
//   privateKeyEncoding: {
//     type: "pkcs8",
//     format: "pem",
//   },
// });

// fs.writeFileSync("./server/server-private.pem", privateKey);
// fs.writeFileSync("./server/server-public.pem", publicKey);
