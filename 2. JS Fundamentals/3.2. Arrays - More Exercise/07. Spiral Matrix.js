function generateSpiralMatrix(rows, cols) {
    let matrix = Array(rows).fill().map(() => Array(cols).fill(''));
    let counter = 1;
    let startCol = 0;
    let endCol = cols - 1;
    let startRow = 0;
    let endRow = rows - 1;

    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            matrix[startRow][i] = counter++;
        }
        startRow++;
        for (let i = startRow; i <= endRow; i++) {
            matrix[i][endCol] = counter++;
        }
        endCol--;
        for (let i = endCol; i >= startCol; i--) {
            matrix[endRow][i] = counter++;
        }
        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            matrix[i][startCol] = counter++;
        }
        startCol++;
    }

    return matrix.map(row => row.join(' ')).join('\n');
}

console.log(generateSpiralMatrix(5, 5));
console.log(generateSpiralMatrix(3, 3));
