function addAndSubtract(num1, num2, num3) {
    let sum = sumTwoNumbers(num1, num2);
    let subtract = subtractTwoNumbers(sum, num3);
 
    return subtract;
 
    function sumTwoNumbers(num1, num2) {
     return num1 + num2;
    }
 
    function subtractTwoNumbers(num1, num2) {
     return num1 - num2;
    }
 }
 
 console.log(addAndSubtract(23,
     6,
     10));