function rotateArray(arr) {
    let rotations = Number(arr.pop());
    for(let i = 0; i < rotations; i++) {
        arr.unshift(arr.pop());
    }
    return arr.join(' ');
}

console.log(rotateArray(['1', '2', '3', '4', '2']));  // Output: "3 4 1 2"
console.log(rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']));  // Output: "Orange Coconut Apple Banana"
