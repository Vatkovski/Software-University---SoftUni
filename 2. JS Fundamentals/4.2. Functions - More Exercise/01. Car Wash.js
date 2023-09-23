function carWash(commands) {
    let value = 0;
    for (let command of commands) {
        switch (command) {
            case 'soap':
                value += 10;
                break;
            case 'water':
                value *= 1.2;
                break;
            case 'vacuum cleaner':
                value *= 1.25;
                break;
            case 'mud':
                value *= 0.9;
                break;
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}

// Test the function with the provided examples
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
