function smallestOfThreeNumbers(num1, num2, num3) {
    let smallest = num1 < num2 ? num1 : num2;
    smallest = num3 < smallest ? num3 : smallest;
    return smallest;
}

console.log(smallestOfThreeNumbers(2, 1, 3));