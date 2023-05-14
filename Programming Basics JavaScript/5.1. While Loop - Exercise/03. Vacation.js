function vacation(input) {

    let excursionCost = Number(input[0]);
    let money = Number(input[1]);
    let spend = 0;
    let days = 1;
    let i = 2;
  
    while (true) {
  
      if (input[i] === "spend") {
        money -= Number(input[i + 1]);
        if (money < 0) {
          money = 0;
        }
        spend++
      }
  
      if (input[i] === "save") {
        money += Number(input[i + 1]);
        spend = 0
      }
  
      if (money >= excursionCost){
        console.log(`You saved the money for ${days} days.`);
        break;
      }
  
      if (spend > 4 || i >= input.length) {
        console.log(`You can't save the money.`);
        console.log(`${days}`);
        break;
      }
      days++
      i += 2
  
    }
  }
  
  vacation(["2000",
  "1000",
  "spend",
  "1200",
  "save",
  "2000"])
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  