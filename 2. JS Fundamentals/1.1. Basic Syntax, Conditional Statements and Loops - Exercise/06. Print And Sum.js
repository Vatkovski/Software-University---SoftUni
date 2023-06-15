function printAndSum(numberOne, numberTwo) {
    let allNumbers = "";
    let sum = 0;
    for (let i = numberOne; i <= numberTwo; i++) {
        allNumbers += `${i} `;
        sum += i
    }
console.log(allNumbers);
console.log(`Sum: ${sum}`);
}
printAndSum(50, 60);


