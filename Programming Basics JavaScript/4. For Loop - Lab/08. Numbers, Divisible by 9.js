// Define a function that takes an input array as its parameter
function numDivisibleBy9(input) {
    // Convert the first and second elements of the input array to numbers and assign them to the start and end variables respectively
    let start = Number(input[0]);
    let end = Number(input[1]);
    // Initialize the sum and count variables to zero
    let sum = 0;
    let count = 0;
    // Loop through all numbers between the start and end variables, incrementing by 1 each time
    for (let i = start; i <= end; i++) {
        // Check if the current number is divisible by 9 with no remainder
        if (i % 9 === 0) {
            // If so, add it to the sum variable
            sum += i;
        }
    }
    // Print the total sum of all divisible numbers to the console
    console.log(`The sum: ${sum}`);
    // Loop through the range of numbers again
    for (let i = start; i <= end; i++) {
        // Check if the current number is divisible by 9 with no remainder
        if (i % 9 === 0) {
            // If so, print it to the console on a new line
            console.log(i);
        }
    }
}
// Call the numDivisibleBy9 function with an input array of ["100", "200"]
numDivisibleBy9(["100", "200"]);
