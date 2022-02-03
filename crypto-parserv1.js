const {load} = require('csv-load-sync');

const bitcoin = load('./coin_Bitcoin.csv');
const eth = load('./coin_Ethereum.csv');
const doge = load('./coin_Dogecoin.csv');

//console.log(bitcoin[2].Marketcap)

function trimmer(array){
let newArray =[];
    for(let i = 0; i<array.length; i++ ){
      let numh = parseFloat(array[i].High).toFixed(8);  
      let numl = parseFloat(array[i].Low).toFixed(8);
      newArray.push( {
            //"SNo": array[i].SNo,
           //"Symbol": array[i].Symbol,
            "Symbol": `${array[i].SNo}-${array[i].Symbol}`,
            "Date": array[i].Date,
            "High": parseFloat(numh) ,
            "Low": parseFloat(numl) ,
            "Marketcap": parseInt(array[i].Marketcap)
        })
     
}

return newArray;
}



 let Tdoge  = trimmer(doge)
let Tbitcoin = trimmer(bitcoin)
let Teth = trimmer(eth)

console.log(Tdoge[0])
console.log(Tbitcoin[0])
console.log(Teth [0])
