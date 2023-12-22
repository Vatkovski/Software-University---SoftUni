function extractNonDecreasingSubset(arr) {
    return arr.reduce((acc, curr) => {
        if (curr >= acc[acc.length - 1] || acc.length === 0) {
            acc.push(curr);
        }
        return acc;
    }, []);
}

console.log(extractNonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]));
// console.log(extractNonDecreasingSubset([1, 2, 3, 4])); 
// console.log(extractNonDecreasingSubset([20, 3, 2, 15, 6, 1]));
