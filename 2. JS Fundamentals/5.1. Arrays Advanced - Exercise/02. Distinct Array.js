function distinctArray(arr) {
    let result = [];
    for (const number of arr) {
        if (!result.includes(number)) {
            result.push(number);
        }
    }
    return result.join(' ');
}

console.log(distinctArray([1, 2, 3, 4])); 
