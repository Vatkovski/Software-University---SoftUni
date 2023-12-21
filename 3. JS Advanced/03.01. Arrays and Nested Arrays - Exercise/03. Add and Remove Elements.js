function addRemoveElements(commands) {
    let number = 1;
    let array = [];
    
    for (let command of commands) {
        if (command === 'add') {
            array.push(number);
        } else if (command === 'remove') {
            array.pop();
        }
        number++;
    }
    
    if (array.length === 0) {
        console.log('Empty');
    } else {
        for (let element of array) {
            console.log(element);
        }
    }
}

addRemoveElements(['add', 'add', 'remove', 'add', 'add']);

