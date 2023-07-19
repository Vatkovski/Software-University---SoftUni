function mathPower(num, pow) {
    let result = 1;
    for (let i = 0; i < pow; i++) {
        result *= num;
    }
    return result;
}

console.log(mathPower(2, 8));