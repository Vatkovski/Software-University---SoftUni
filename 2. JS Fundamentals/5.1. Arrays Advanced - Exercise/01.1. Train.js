function train(input) {
    let allWagons = input[0].split(' ').map(Number)
    let maxCapacity = Number(input[1]);
    
    for (let i = 2; i < input.length; i++) {
        let [firstInput, secondInput] = input[i].split(' ');
        
        if (firstInput === 'Add') {
            allWagons.push(Number(secondInput))
        } else {
            for (let j = 0; j < allWagons.length; j++) {
                if (allWagons[j] + Number(firstInput) <= maxCapacity) {
                    allWagons[j] += Number(firstInput);
                    break;
                }
            }                
        }
    }
    console.log(allWagons.join(' '));
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)