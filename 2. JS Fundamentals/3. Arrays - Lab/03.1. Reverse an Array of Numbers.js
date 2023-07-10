function reverseAnArrayOfNumbers(n, inputArr) {
    let arr=[];
    for (let i = 0; i < n; i++) {
      arr.push(inputArr[i]);
    }  
    let result = arr.reverse();
    console.log(result.join(" "));
  }
  
  reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
  
  
  
  