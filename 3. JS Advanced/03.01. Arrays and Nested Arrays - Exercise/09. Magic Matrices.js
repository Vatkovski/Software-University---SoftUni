function isMagical(matrix) {
    let sum = matrix[0].reduce((a, b) => a + b, 0);
    
    for(let i = 1; i < matrix.length; i++) {
        if (matrix[i].reduce((a, b) => a + b, 0) !== sum) {
            return false;
        }
    }
    
    for(let i = 0; i < matrix[0].length; i++) {
        let colSum = 0;
        for(let j = 0; j < matrix.length; j++) {
            colSum += matrix[j][i];
        }
        if (colSum !== sum) {
            return false;
        }
    }
    
    return true;
}

console.log(isMagical([[4, 5, 6],     [6, 5, 4],    [5, 5, 5]]));