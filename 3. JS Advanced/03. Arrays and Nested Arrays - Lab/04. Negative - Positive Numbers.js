function processNumbers(numbers) {
    let result = [];

    for(let number of numbers) {
        if(number < 0) {
            result.unshift(number); // Add to the front of the array
        } else {
            result.push(number); // Add to the end of the array
        }
    }

    return result;
}

