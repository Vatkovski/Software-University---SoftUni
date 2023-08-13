function houseParty(arr) {
    let guests = [];
    for (let i = 0; i < arr.length; i++) {
        let message = arr[i].split(' ');
        let name = message[0];
        if (message.includes('not')) {
            removeGuest(guests, name);
        } else {
            addGuest(guests, name);
        }
    }
    for (let guest of guests) {
        console.log(guest);
    }

    function addGuest(guests, name) {
        if (guests.includes(name)) {
            console.log(name + ' is already in the list!');
        } else {
            guests.push(name);
        }
    }
    
    function removeGuest(guests, name) {
        if (guests.includes(name)) {
            let index = guests.indexOf(name);
            guests.splice(index, 1);
        } else {
            console.log(name + ' is not in the list!');
        }
    }    

    
}

houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);
