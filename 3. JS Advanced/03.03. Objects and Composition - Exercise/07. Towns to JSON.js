function towns(input) {
    let townColumns = input.shift();
    let cities = [];
    let obj = {};
    input.forEach(town => {
        let [...towns] = town
        .split('|')
        .map(town => town.trim())
        .filter(x => x);
        towns[1] = Number(towns[1]);
        towns[2] = Number(towns[2]);
        obj = {
            Town: towns[0],
            Latitude: Number(towns[1].toFixed(2)),
            Longitude: Number(towns[2].toFixed(2))}
            cities.push(obj)
        });
        console.log(JSON.stringify(cities));
}

towns([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);