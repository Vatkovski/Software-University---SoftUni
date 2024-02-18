function greeting(inputArray) {
    let age = parseFloat(inputArray[0]);
    let gender = inputArray[1];
    if (gender === 'm') {
        if (age < 16) {
            return 'Master';
        } else {
            return 'Mr.';
        }
    } else if (gender === 'f') {
        if (age < 16) {
            return 'Miss';
        } else {
            return 'Ms.';
        }
    } else {
        return 'Invalid input';
    }
}

console.log(greeting(["12", "f"]));  // Miss
console.log(greeting(["17", "m"]));  // Mr.
console.log(greeting(["25", "f"]));  // Ms.
console.log(greeting(["13.5", "m"]));  // Master
