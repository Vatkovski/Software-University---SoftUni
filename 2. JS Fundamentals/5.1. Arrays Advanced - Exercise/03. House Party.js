function houseParty(input) {
    let list = [];

    for (let i = 0; i < input.length; i++) {
        let split = input[i].split(' ');
        let name = split[0];
        if (!split.includes('not')) {
            if (list.indexOf(name) === -1) {
                list.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        }        

        if (split.includes('not')) {
            if (list.indexOf(name) === -1) {
                console.log(`${name} is not in the list!`);                
            } else {
                list.splice(list.indexOf(name), 1);
            }
        }
        
    }

    for (const el of list) {
        console.log(el);
    }    
}

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
);