function calculator(num, operator, num2) {
    let result = eval(`${num} ${operator} ${num2}`);
    console.log(result.toFixed(2));
  }
  calculator(5, "+", 10);
  