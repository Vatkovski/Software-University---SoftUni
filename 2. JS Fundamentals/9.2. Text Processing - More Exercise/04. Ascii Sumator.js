function asciiSumator(char1, char2, str) {
    let sum = 0;
    let startChar = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
    let endChar = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));

    for (let i = 0; i < str.length; i++) {
        let ascii = str[i].charCodeAt(0);
        if (ascii > startChar && ascii < endChar) {
            sum += ascii;
        }
    }

    return sum;
}

console.log(asciiSumator('.', '@', 'dsg12gr5653feee5')); // Output: 363
console.log(asciiSumator('?', 'E', '@ABCEF')); // Output: 262
console.log(asciiSumator('a', '1', 'jfe392$#@j24ui9ne#@$')); // Output: 445
