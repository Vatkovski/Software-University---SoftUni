function sumOfNumbers(input) {
    let numberAsString = input[0]; //"1234"
    let sumOfDigits = 0;
   
    for (let i = 0; i < numberAsString.length; i++) {
      let currentNumber = Number(numberAsString[i]);
      sumOfDigits += currentNumber;
    }
    console.log(`The sum of the digits is:${sumOfDigits}`);
  }
  sumOfNumbers(["999"]);