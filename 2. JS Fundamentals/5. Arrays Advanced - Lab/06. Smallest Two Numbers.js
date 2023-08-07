function smallestTwoNumbers(numbers) {
    let sortedInAscending = numbers.sort((a, b) => {
        return a - b;
    });

    console.log(sortedInAscending.slice(0, 2).join(' '));
}

console.log(smallestTwoNumbers([30, 15, 50, 5]))