function bombNumbers(numbers, bomb) {
    let [bombNumber, bombPower] = bomb;
    let findBomb = numbers.indexOf(bombNumber);

    while (numbers.indexOf(bombNumber) !== -1) {
        let start = findBomb - bombPower;
        let end = findBomb + bombPower;
        if (start < 0) {
            start = 0;
        }
        numbers.splice(start, end);
    }
    
    let sumNumbersLeft = numbers.reduce((a, b) => a + b);

    console.log(sumNumbersLeft);

}

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],    [2, 1]);