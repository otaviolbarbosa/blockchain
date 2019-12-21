const Blockchain = require("./models/Blockchain");
const Transaction = require("./models/Transaction");

let otavioCoin = new Blockchain();

otavioCoin.createTransaction(new Transaction("address1", "address2", 100));
otavioCoin.createTransaction(new Transaction("address2", "address1", 50));

console.log("starting the miner");
otavioCoin.minePendingTransactions("otavio-address");

console.log(
  "balance of otavio is",
  otavioCoin.getBalanceOfAddress("otavio-address")
);

otavioCoin.minePendingTransactions("otavio-address");

console.log(
  "balance of otavio is",
  otavioCoin.getBalanceOfAddress("otavio-address")
);
