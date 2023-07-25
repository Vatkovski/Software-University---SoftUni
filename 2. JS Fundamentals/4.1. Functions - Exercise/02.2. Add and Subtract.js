function addAndSubtract(num1, num2, num3) {
    let sumTwoNumbers = function (num1, num2) {
        return num1 + num2;
    }

    let subtractTwoNumbers = function(num1, num2) {
        return num1 - num2;
    }

    let sum = sumTwoNumbers(num1, num2);
    let subtract = subtractTwoNumbers(sum, num3);

    return subtract;
}

console.log(addAndSubtract(23,
    6,
    10));