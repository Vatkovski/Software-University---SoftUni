function printNumberPyramid(n) {
    let currentNumber = 1;
    let rowLength = 1;
    while (currentNumber <= n) {
        let row = "";
        for (let i = 0; i < rowLength; i++) {
            if (currentNumber > n) break;
            row += currentNumber + " ";
            currentNumber++;
        }
        console.log(row);
        rowLength++;
    }
}
numberPyramid(["7"])
