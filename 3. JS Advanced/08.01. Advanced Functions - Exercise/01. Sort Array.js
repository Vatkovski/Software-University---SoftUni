function sortArray(array, order) {
    if (order === 'asc') {
        return array.sort((a, b) => a - b);
    } else if (order === 'desc') {
        return array.sort((a, b) => b - a);
    }
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc')); // Output: [6, 7, 8, 14, 17]
console.log(sortArray([14, 7, 17, 6, 8], 'desc')); // Output: [17, 14, 8, 7, 6]
