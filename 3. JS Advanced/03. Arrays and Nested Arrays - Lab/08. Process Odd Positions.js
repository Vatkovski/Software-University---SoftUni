function processOddPositions(arr) {
    let result = arr.filter((num, index) => index % 2 !== 0).map(num => num * 2).reverse();
    return result.join(' ');
}

console.log(processOddPositions([10, 15, 20, 25]));  
// console.log(processOddPositions([3, 0, 10, 4, 7, 3]));
