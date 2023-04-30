function cleverLily(input) {
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let toysCount = 0;
  let money = 0;
  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      money += 10 * (i / 2);
      money -= 1; 
    } else {
      toysCount++;
    }
  }
  let totalMoney = toysCount * toyPrice + money;
  if (totalMoney >= washingMachinePrice) {
    let moneyLeft = totalMoney - washingMachinePrice;
    console.log(`Yes! ${moneyLeft.toFixed(2)}`);
  } else {
    let moneyNeeded = washingMachinePrice - totalMoney;
    console.log(`No! ${moneyNeeded.toFixed(2)}`);
  }
  }
  
  cleverLily(["21",
  "1570.98",
  "3"])