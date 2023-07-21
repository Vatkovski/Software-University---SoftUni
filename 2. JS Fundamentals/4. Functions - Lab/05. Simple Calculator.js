function simpleCalculator(num1, num2, operator) {
    const operations = {
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b,
        add: (a, b) => a + b,
        subtract: (a, b) => a - b
    };
    return operations[operator](num1, num2);
}

console.log(simpleCalculator(5, 5, 'multiply'));