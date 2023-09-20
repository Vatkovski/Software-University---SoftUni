function extractNonDecreasingSubset(arr) {
    let max = arr[0];
    let result = arr.filter((num) => {
        if (num >= max) {
            max = num;
            return true;
        }
        return false;
    });
    return result.join(' ');
}

console.log(extractNonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24])); // Outputs: "1 3 8 10 12 24"
console.log(extractNonDecreasingSubset([1, 2, 3, 4])); // Outputs: "1 2 3 4"
console.log(extractNonDecreasingSubset([20, 3, 2, 15, 6, 1])); // Outputs: "20"
