function deserializeString(inputArray) {
    let result = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === 'end') {
            break;
        }
        let parts = inputArray[i].split(':');
        let letter = parts[0];
        let indices = parts[1].split('/');
        for (let j = 0; j < indices.length; j++) {
            result[indices[j]] = letter;
        }
    }
    return result.join('');
}

let input = ['a:0/2/4/6', 'b:1/3/5', 'end'];
console.log(deserializeString(input)); // Outputs: "abababa"
