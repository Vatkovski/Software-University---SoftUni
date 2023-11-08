function solve() {
  // constants
  const CAMEL_CASE = "Camel Case";
  const PASCAL_CASE = "Pascal Case";

  // capture elements
  let inputValueByLowerCase = document.getElementById("text").value.toLowerCase();
  let currentCaseValue = document.getElementById("naming-convention").value;
  let result = document.getElementById("result");

  // validate case
  if (currentCaseValue !== CAMEL_CASE && currentCaseValue !== PASCAL_CASE) {
      result.textContent = "Error!";
      return;
  }

  let arrOfStr = inputValueByLowerCase.split(" ");
  let output = "";
  let startingPoint = 0;

  if (currentCaseValue === CAMEL_CASE) {
      output += arrOfStr[0];
      startingPoint = 1;
  }

  for (let i = startingPoint; i < arrOfStr.length; i++) {
      let currentWord = arrOfStr[i];
      
      output += currentWord[0].toUpperCase() + currentWord.slice(1, currentWord.length);

      result.textContent = output;
  }    
}