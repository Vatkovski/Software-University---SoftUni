function biggestElement(matrix) {
    let max = Number.NEGATIVE_INFINITY;
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] > max) {
                max = matrix[i][j];
            }
        }
    }
    return max;
}


console.log(biggestElement([[20, 50, 10], [8, 33, 145]]));
// console.log(biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]));
