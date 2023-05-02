function oscars(input) {
    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let numberOfEvaluators = Number(input[2]);
  
    
  
    for (let i = 3; i < input.length; i += 2) {
     
      academyPoints += (Number(input[i].length) * Number(input[i+1])) / 2;
     if (academyPoints > 1250.5) {
      break;
     }
    }
    
    let insufficientPoints = 1250.5 - academyPoints
  
    if (academyPoints < 1250.5) {
      console.log(`Sorry, ${actorName} you need ${insufficientPoints.toFixed(1)} more!`);
  
    } else {
      console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
    }
  }
  
    oscars(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"])
    