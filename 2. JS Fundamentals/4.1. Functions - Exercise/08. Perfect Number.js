function perfectNumber(num) {
    function findDivisors(num) {
      let divisors = [];
      for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
          divisors.push(i);
        }
      }
      return divisors;
    }
  
    let divisors = findDivisors(num);
    let sum = 0;
    for (let i = 0; i < divisors.length; i++) {
      sum += divisors[i];
    }
  
    if (sum === num) {
      console.log("We have a perfect number!");
    } else {
      console.log("It's not so perfect.");
    }
  }
  
  perfectNumber(28)
  