function rageQuit(input) {
    let pattern = /([^0-9]+)([0-9]+)/g;
    let match = pattern.exec(input);
    let result = '';
    let uniqueSymbols = new Set();

    while (match) {
        let string = match[1].toUpperCase();
        let count = Number(match[2]);

        for (let char of string) {
            uniqueSymbols.add(char);
        }

        result += string.repeat(count);
        match = pattern.exec(input);
    }

    console.log(`Unique symbols used: ${uniqueSymbols.size}`);
    console.log(result);
}


rageQuit('aSd2&5s@1');
