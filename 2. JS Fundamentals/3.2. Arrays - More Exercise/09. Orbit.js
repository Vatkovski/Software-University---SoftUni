function orbit(input) {
    let [width, height, x, y] = input;
    let matrix = [];

    for(let i=0; i<height; i++) {
        matrix.push([]);
    }

    for(let row=0; row<height; row++) {
        for(let col=0; col<width; col++) {
            matrix[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
        }
    }

    console.log(matrix.map(row => row.join(' ')).join('\n'));
}

orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2]);
