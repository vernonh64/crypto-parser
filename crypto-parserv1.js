const {load} = require('csv-load-sync');

const bitcoin = load('./coin_Bitcoin.csv');
const eth = load('./coin_Ethereum.csv');
const doge = load('./coin_Dogecoin.csv');

console.log(bitcoin[6])






