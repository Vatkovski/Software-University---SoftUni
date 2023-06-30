function sumDigits(num) {
    let numToString = num.toString();
    let sum = 0;
   for (let i = 0; i < numToString.length; i++) {
    let currentNum = Number(numToString[i]);
    sum += currentNum;        
   }
   console.log(sum);
}

sumDigits(245678);