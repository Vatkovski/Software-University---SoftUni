function sumNumbers(input) {

    let index = 1;
    let number = input[0];
    let sumOfNumbers = 0;

    while (index < input.length) {
        sumOfNumbers += Number(input[index]);
        if (number <= sumOfNumbers) {
            console.log(sumOfNumbers);
            break;
        }
        index++
    }

}
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])



