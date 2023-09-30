function uniqueSequences(input) {
    let arrays = new Map();

    for(let line of input) {
        let array = JSON.parse(line).map(Number);
        array.sort((a, b) => b - a);

        let toStore = `[${array.join(', ')}]`;
        if(!arrays.has(toStore))
            arrays.set(toStore, array.length);
    }

    [...arrays.keys()].sort((a, b) => arrays.get(a) - arrays.get(b)).forEach(a => console.log(a));
}

let input = ["[-3, -2, -1, 0, 1, 2, 3, 4]", "[10, 1, -17, 0, 2, 13]", 
            "[4, -3, 3, -2, 2, -1, 1, 0]"];
uniqueSequences(input);
