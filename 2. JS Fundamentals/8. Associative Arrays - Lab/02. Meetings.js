function meetings(input) {
    let meetings = {};

    for (let i = 0; i < input.length; i++) {
        let [day, name] = input[i].split(' ');

        if (meetings[day]) {
            console.log(`Conflict on ${day}!`);
        }
        else {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }        
    }

    for (let [day, name] of Object.entries(meetings)) {
        console.log(`${day} -> ${name}`);
        
    }

    // alternative solution.
    // for (let day in meetings) {
    //     console.log(`${day} -> ${meetings[day]}`);        
    // }    
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);