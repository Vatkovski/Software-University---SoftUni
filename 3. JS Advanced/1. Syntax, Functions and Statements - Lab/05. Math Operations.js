function performMathOperation(num1, num2, operator) {
    let result;
  
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      case '%':
        result = num1 % num2;
        break;
      case '**':
        result = Math.pow(num1, num2);
        break;
      default:
        console.log("Invalid operator");
        return;
    }
  
    console.log(result);
  }
  
  // Example usage:
  performMathOperation(5, 6, '+');   // Output: 11
  performMathOperation(3, 5.5, '*'); // Output: 16.5
  