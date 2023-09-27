function trackPollution(matrix, forces) {
    matrix = matrix.map(row => row.split(' ').map(Number));
    forces.forEach(force => {
        let [type, value] = force.split(' ');
        value = Number(value);
        switch (type) {
            case 'breeze':
                matrix[value] = matrix[value].map(x => Math.max(0, x - 15));
                break;
            case 'gale':
                matrix = matrix.map(row => {
                    row[value] = Math.max(0, row[value] - 20);
                    return row;
                });
                break;
            case 'smog':
                matrix = matrix.map(row => row.map(x => x + value));
                break;
        }
    });

    let pollutedAreas = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] >= 50) {
                pollutedAreas.push(`[${i}-${j}]`);
            }
        }
    }

    if (pollutedAreas.length > 0) {
        console.log(`Polluted areas: ${pollutedAreas.join(', ')}`);
    } else {
        console.log('No polluted areas');
    }
}

// Test the function
trackPollution(['5 7 72 14 4', '41 35 37 27 33', '23 16 27 42 12', '2 20 28 39 14', '16 34 31 10 24'], ['breeze 1', 'gale 2','smog 25']);