function fishingBoat(input) {
  let groupBudget = Number(input[0]);
  let season = input[1];
  let numberFishermans = Number(input[2]);

  let price;
  if (season === "Spring") {
    price = 3000;
  }
  if (season === "Summer" || season === "Autumn") {
    price = 4200;
  }
  if (season === "Winter") {
    price = 2600;
  }

  
  if (numberFishermans <= 6) {
    price = price - (price * 0.1);
  }
  if (numberFishermans >= 7 && numberFishermans <= 11) {
    price = price - (price * 0.15);
  }
  if (numberFishermans >= 12) {
    price = price - (price * 0.25);
  }
 
  if (season === "Autumn") {
    price = price
  } else {
    if (numberFishermans % 2 === 0) {
        price = price - (price * 0.05);
      } else {
        price = price
      }
  }
  
  let moneyLeft = groupBudget - price;
if (groupBudget >= price) {
    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
} else {
    console.log(`Not enough money! You need ${Math.abs(moneyLeft).toFixed(2)} leva.`);
}

}


fishingBoat(["3600",
"Autumn",
"6"])
