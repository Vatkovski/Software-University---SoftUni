function modifyNumber(num) {
    let numStr = num.toString();
    let sum = 0;
    for(let i = 0; i < numStr.length; i++) {
        sum += parseInt(numStr[i]);
    }
    while(sum / numStr.length <= 5) {
        numStr += '9';
        sum += 9;
    }
    return parseInt(numStr);
}

console.log(modifyNumber(101)); // Output: 1019999
console.log(modifyNumber(5835)); // Output: 5835
