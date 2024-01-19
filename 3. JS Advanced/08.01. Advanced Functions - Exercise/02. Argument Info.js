function argumentInfo() {
    let typeCounts = {};

    for (let arg of arguments) {
        console.log(`${typeof arg}: ${arg}`);
        if (!typeCounts[typeof arg]) {
            typeCounts[typeof arg] = 1;
        } else {
            typeCounts[typeof arg]++;
        }
    }

    let sortedTypes = Object.entries(typeCounts).sort((a, b) => b[1] - a[1]);
    for (let [type, count] of sortedTypes) {
        console.log(`${type} = ${count}`);
    }
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });
