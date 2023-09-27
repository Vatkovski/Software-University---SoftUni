function postfixNotation(input) {
    let stack = [];
    for (let i = 0; i < input.length; i++) {
        if (typeof input[i] === 'number') {
            stack.push(input[i]);
        } else {
            if (stack.length < 2) {
                return "Error: not enough operands!";
            }
            let b = stack.pop();
            let a = stack.pop();
            switch (input[i]) {
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
                case '/':
                    stack.push(a / b);
                    break;
            }
        }
    }
    if (stack.length > 1) {
        return "Error: too many operands!";
    }
    return stack.pop();
}

console.log(postfixNotation([3,    4,    '+']))