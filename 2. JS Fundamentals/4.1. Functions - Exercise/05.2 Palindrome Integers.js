function palindromeIntegers(input) {
    for (let i = 0; i < input.length; i++) {
        let reverse = Number(input[i].toString().split('').reverse().join(''));
        console.log(input[i] === reverse); 
    }    
}

console.log(palindromeIntegers([123,323,421,121]));