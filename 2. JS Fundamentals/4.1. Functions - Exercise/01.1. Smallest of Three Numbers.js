function smallestOfThreeNumbers(num1, num2, num3) {
    let smallest = num1;
    if (num2 < smallest) {
        smallest = num2;
    }
    if (num3 < smallest) {
        smallest = num3;
    }
    return smallest;
}

console.log(smallestOfThreeNumbers(2, 5, 3));