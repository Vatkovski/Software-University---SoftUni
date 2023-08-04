function firstAndLastKNumbers(numbers) {
    let k = numbers.shift(0);
    let firstNumbers = numbers.slice(0, k);
    let lastNumbers = numbers.slice(numbers.length - k, numbers.length);

    console.log(firstNumbers.join(" "));
    console.log(lastNumbers.join(" "));
}

firstAndLastKNumbers([2, 7, 8, 9]);