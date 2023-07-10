function reverseAnArrayOfNumbers(n, array) {
    let numbers = "";
    for (let i = n - 1; i >= 0; i--) {
      numbers += ` ${array[i]}`;
    }
    console.log(numbers);
  }
  
  reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
  reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
  reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);
  
  
  