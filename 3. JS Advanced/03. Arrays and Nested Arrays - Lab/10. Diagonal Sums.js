function diagonalSums(matrix) {
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    let matrixLength = matrix.length;

    for(let i = 0; i < matrixLength; i++) {
        mainDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][matrixLength - i - 1];
    }

    console.log(mainDiagonalSum + ' ' + secondaryDiagonalSum);
}

diagonalSums([[20, 40], [10, 60]]); 
// diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]); 
