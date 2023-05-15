function steps(input) {

    let target = 10000;
    let steps = 0;
    let missingSteps = 0;
    let stepsOverTarget = 0;
    let i = 0;
    
    while (true) {
  
      if (input[i] !== "Going home") {
        steps += Number(input[i]);
      }
  
      if (steps >= target) {
        stepsOverTarget = steps - target;
        console.log(`Goal reached! Good job!`);
        console.log(`${stepsOverTarget} steps over the goal!`);
        break;
      }
  
      if (input[i] === "Going home") {
        steps += Number(input[i+1]);
        if (steps >= target) {
          stepsOverTarget = steps - target;
          console.log(`Goal reached! Good job!`);
          console.log(`${stepsOverTarget} steps over the goal!`);
          break;
        } 
  
        if (steps < target) {
          missingSteps = target - steps;
          console.log(`${missingSteps} more steps to reach goal.`);
          break;
        }
  
      }
  
      if (i === Number(input.length)) {
        missingSteps = target - steps;
          console.log(`${missingSteps} more steps to reach goal.`);
          break;
      }
      i++
  
    }
  }
  
  steps(["1000",
  "1500",
  "2000",
  "6500"])
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  