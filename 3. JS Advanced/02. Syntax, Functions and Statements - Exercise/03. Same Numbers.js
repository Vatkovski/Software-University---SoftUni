function checkDigitsAndSum(n) {
    let digits = n.toString().split('');
    let allEqual = digits.every( digit => digit === digits[0] );
    let sum = digits.reduce((a, b) => +a + +b, 0);
    console.log(allEqual);
    console.log(sum);
}

checkDigitsAndSum(2222222); 
checkDigitsAndSum(1234); 
