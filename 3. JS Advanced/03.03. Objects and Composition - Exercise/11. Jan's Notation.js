function janNotation(input) {
    let operands = [];
    for (let i = 0; i < input.length; i++) {
        if (typeof input[i] === 'number') {
            operands.push(input[i]);
        } else {
            if (operands.length < 2) {
                console.log('Error: not enough operands!');
                return;
            }
            let operand2 = operands.pop();
            let operand1 = operands.pop();
            switch (input[i]) {
                case '+':
                    operands.push(operand1 + operand2);
                    break;
                case '-':
                    operands.push(operand1 - operand2);
                    break;
                case '*':
                    operands.push(operand1 * operand2);
                    break;
                case '/':
                    operands.push(operand1 / operand2);
                    break;
            }
        }
    }
    if (operands.length > 1) {
        console.log('Error: too many operands!');
    } else {
        console.log(operands[0]);
    }
}

janNotation([3, 4, '+']);
// janNotation([5, 3, 4, '*', '-']);
// janNotation([7, 33, 8, '-']);
// janNotation([15, '/']);
