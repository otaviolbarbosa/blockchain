const Block = require("./src/models/Block");
const Blockchain = require("./src/models/Blockchain");

let otavioCoin = new Blockchain();

otavioCoin.addBlock(new Block(1, "11/12/2019", { amount: 4 }));
otavioCoin.addBlock(new Block(1, "12/12/2019", { amount: 10 }));

console.log(JSON.stringify(otavioCoin, null, 2));
