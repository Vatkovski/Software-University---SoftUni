function traveling(input) {
    let i = 0;

      while (input[i] !== "End") {
        let destination = input[i];
        i++
        let budgetNeeded = Number(input[i]);
        i++
        let savings = 0;
  
        while (savings < budgetNeeded) {
          let income = Number(input[i]);
          savings += income;
          i++
        }
        console.log(`Going to ${destination}!`);
  
      }
  }
  
  
  traveling(["France",
  "2000",
  "300",
  "300",
  "200",
  "400",
  "190",
  "258",
  "360",
  "Portugal",
  "1450",
  "400",
  "400",
  "200",
  "300",
  "300",
  "Egypt",
  "1900",
  "1000",
  "280",
  "300",
  "500",
  "End"])
  
  
  
  
  
  
  