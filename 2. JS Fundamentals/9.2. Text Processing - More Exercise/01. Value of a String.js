function asciiSum(input) {
    let str = input[0];
    let caseType = input[1];
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        let ascii = str.charCodeAt(i);

        if (caseType === 'UPPERCASE' && ascii >= 65 && ascii <= 90) {
            sum += ascii;
        } else if (caseType === 'LOWERCASE' && ascii >= 97 && ascii <= 122) {
            sum += ascii;
        }
    }

    return 'The total sum is: ' + sum;
}

console.log(asciiSum(['HelloFromMyAwesomePROGRAM', 'LOWERCASE'])); // Output: The total sum is: 1539
console.log(asciiSum(['AC/DC', 'UPPERCASE'])); // Output: The total sum is: 267
