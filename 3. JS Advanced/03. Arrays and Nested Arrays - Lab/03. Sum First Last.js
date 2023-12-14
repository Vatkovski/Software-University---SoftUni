function sumFirstLast(numbers) {
    let firstElement = Number(numbers[0]);
    let lastElement = Number(numbers[numbers.length - 1]);

    return firstElement + lastElement;
}

console.log(sumFirstLast(['20', '30', '40']));