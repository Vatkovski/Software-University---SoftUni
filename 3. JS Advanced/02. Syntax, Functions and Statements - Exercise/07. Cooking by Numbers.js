function cookingByNumbers(input) {
    let number = Number(input.shift());

    const operations = {
        'chop': () => number /= 2,
        'dice': () => number = Math.sqrt(number),
        'spice': () => number += 1,
        'bake': () => number *= 3,
        'fillet': () => number -= number * 0.2,
    };

    input.forEach(operation => {
        operations[operation]();
        console.log(number);
    });
}


cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);
