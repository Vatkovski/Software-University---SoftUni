function sortNumbers(num1, num2, num3) {
    let numbers = [num1, num2, num3];
    numbers.sort((a, b) => b - a);
    for(let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}

sortNumbers(2, 1, 3);
sortNumbers(-2, 1, 3);
sortNumbers(0, 0, 2);
