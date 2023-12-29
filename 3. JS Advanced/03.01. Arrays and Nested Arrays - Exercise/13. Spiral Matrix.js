function generateSpiralMatrix(rows, cols) {
    let matrix = Array(rows).fill().map(() => Array(cols).fill(''));
    let counter = 1;
    let startCol = 0;
    let endCol = cols - 1;
    let startRow = 0;
    let endRow = rows - 1;

    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            matrix[startRow][i] = counter;
            counter++;
        }
        startRow++;
        for (let j = startRow; j <= endRow; j++) {
            matrix[j][endCol] = counter;
            counter++;
        }
        endCol--;
        for (let i = endCol; i >= startCol; i--) {
            matrix[endRow][i] = counter;
            counter++;
        }
        endRow--;
        for (let j = endRow; j >= startRow; j--) {
            matrix[j][startCol] = counter;
            counter++;
        }
        startCol++;
    }

    matrix.forEach(row => console.log(row.join(' ')));
}

generateSpiralMatrix(5, 5);
// generateSpiralMatrix(3, 3);
