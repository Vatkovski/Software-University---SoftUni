function distinctArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result.join(' ');
}

console.log(distinctArray([1, 2, 3, 4])); 
