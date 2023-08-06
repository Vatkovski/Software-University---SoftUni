function processOddNumbers(numbers) {
    let result = [];
    for (let i = 1; i < numbers.length; i += 2) {
        let multiplier = numbers[i] * 2;
        result.push(multiplier);        
    }

    console.log(result.reverse().join(" "));
}

processOddNumbers([10, 15, 20, 25] );