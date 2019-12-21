const Block = require("./src/models/Block");
const Blockchain = require("./src/models/Blockchain");

let otavioCoin = new Blockchain();

console.log("Mining block 1");
otavioCoin.addBlock(new Block(1, "11/12/2019", { amount: 4 }));
console.log("Mining block 2");
otavioCoin.addBlock(new Block(1, "12/12/2019", { amount: 10 }));

console.log(JSON.stringify(otavioCoin, null, 2));
