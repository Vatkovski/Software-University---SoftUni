function subtract() {
    let firstNumberValue = Number(document.getElementById("firstNumber").value);
    let secondNumberValue = Number(document.getElementById("secondNumber").value);

    let sum = firstNumberValue - secondNumberValue;

    document.getElementById("result").textContent = sum;
}