function getLastDigitName(n) {
    let lastDigit = n % 10;
    switch (lastDigit) {
        case 0: return 'zero';
        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';
    }
}

console.log(getLastDigitName(512)); // Output: two
console.log(getLastDigitName(1)); // Output: one
console.log(getLastDigitName(1643)); // Output: three
