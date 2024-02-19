function checkNumber(n) {
    n = Number(n);
    if (n !== 0 && n >= -100 && n <= 100) {
        return "Yes";
    } else {
        return "No";
    }
}

console.log(checkNumber(["-25"]));