function bitcoinMining(input) {
    let dayCounter = 0;
    let bitcoins = 0;
    let moneySum = 0;
    let firstBitcoin = 0;
 
     for (let i = 0; i < input.length; i++) {           
         let money = Number(input[i]);
 
         dayCounter++        
         if (dayCounter % 3 === 0) {
             money *= 0.70;
         }
         money *= 67.51;
         moneySum += money;
 
         while (moneySum >= 11949.16) {
             moneySum -= 11949.16;
             bitcoins++
             if (bitcoins === 1) {
                 firstBitcoin = dayCounter;
             }
         }
         
     }
     console.log(`Bought bitcoins: ${bitcoins}`);
     if (bitcoins >= 1) {
         console.log(`Day of the first purchased bitcoin: ${firstBitcoin}`);
     }
     console.log(`Left money: ${moneySum.toFixed(2)} lv.`);
 
 }
 
 bitcoinMining([100, 200, 300])
 
 
 
 