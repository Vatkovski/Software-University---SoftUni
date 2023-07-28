function oddAndEvenSum(num) {
    let oddSum = 0;
    let evenSum = 0;
    let digits = num.toString().split('');

    for (let i = 0; i < digits.length; i++) {
        if (digits[i] % 2 === 0) {
            evenSum += Number(digits[i]); //or use evenSum += parseInt(digits[i]); 
        } else {
            oddSum += Number(digits[i]); //or use oddSum += parseInt(digits[i]);
        }
    }
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

console.log(oddAndEvenSum(1000435));