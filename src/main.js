const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const Blockchain = require("./models/Blockchain");
const Transaction = require("./models/Transaction");

const myKey = ec.keyFromPrivate(
  "2c22519b75ebee8676c379bc7e7c241111fd490b642011ae19a0bac1dbf2fa62"
);
const myWalletAddress = myKey.getPublic("hex");

let otavioCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, "public key goes here", 10);
tx1.signTransaction(myKey);

otavioCoin.addTransaction(tx1);

console.log("starting the miner");
otavioCoin.minePendingTransactions(myWalletAddress);

console.log(
  "balance of otavio is",
  otavioCoin.getBalanceOfAddress(myWalletAddress)
);

console.log("Is chain valid? ", otavioCoin.isChainValid());
