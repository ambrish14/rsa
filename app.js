const crypto = require("node:crypto");
const fs = require("node:fs");
// const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
//   modulusLength: 2054, // jey size in bits
//   publicKeyEncoding: {
//     type: "spki", //other option is pkcs1
//     format: "pem",
//   },
//   privateKeyEncoding: {
//     type: "pkcs8", // other option pkcs1
//     format: "pem",
//   },
// });

// console.log(publicKey);
// console.log(privateKey);

// fs.writeFileSync("private.pem", privateKey);
// fs.writeFileSync("public.pem", publicKey);

const privateKeyPem = fs.readFileSync("private.pem");

const publicKeyPem = fs.readFileSync("public.pem");

const privateKey = crypto.createPrivateKey({
  key: privateKeyPem,
  format: "pem",
});

const publicKey = crypto.createPublicKey({
  key: publicKeyPem,
  format: "pem",
});

const plainText = Buffer.from("This is my Password $#*U(r&F", "utf-8");

const cipherText = crypto.publicEncrypt({ key: publicKey }, plainText);
console.log(cipherText);

crypto.privateEncrypt;

crypto.publicDecrypt;
crypto.privateDecrypt;
