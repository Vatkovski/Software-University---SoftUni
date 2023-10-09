function findLargestNumber(num1, num2, num3) {
    let largestNumber = Math.max(num1, num2, num3);
    console.log(`The largest number is ${largestNumber}.`);
}

findLargestNumber(5, -3, 16);  // Output: The largest number is 16.
findLargestNumber(-3, -5, -22.5);  // Output: The largest number is -3.
