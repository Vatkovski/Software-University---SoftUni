function palindromeIntegers(input) {
    for (let i = 0; i < input.length; i++) {
        let numAsString = String(input[i]);
        let reverseText = reverse(numAsString)
        console.log(reverseText === numAsString);
    }
    
    function reverse(text) {
        let result = "";
        for (let i = text.length - 1; i >= 0; i--) {
            result += text[i];            
        }
        return result;
    }
}

console.log(palindromeIntegers([123,323,421,121]));