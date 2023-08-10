function arrayManipulations(input) {
    let arr = input[0].split(' ').map(Number);
    for (let i = 1; i < input.length; i++) {
        let [command, firstNum, secondNum] = input[i].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        switch (command) {
            case 'Add':
                arr.push(firstNum);
                break;
            case 'Remove':
                arr = arr.filter(el => el !== firstNum);
                break;
            case 'RemoveAt':
                arr.splice(firstNum, 1);
                break;
            case 'Insert':
                arr.splice(secondNum, 0, firstNum);
                break;
        }
    }
    console.log(arr.join(' '));
}


arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
);
