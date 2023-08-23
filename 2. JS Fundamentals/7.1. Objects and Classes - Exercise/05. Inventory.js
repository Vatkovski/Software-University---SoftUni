function inventory(input) {
    let result = [];

input.forEach(line => {
    let [name, level, items] = line.split(' / ');

    let hero = {
            name: name,
            level: Number(level),
            items: items
    };

    result.push(hero);
});

result.sort((a, b) => a.level - b.level);

result.forEach(heroObjects => {
    console.log(`Hero: ${heroObjects.name}`);
    console.log(`level => ${heroObjects.level}`);
    console.log(`items => ${heroObjects.items}`);
});
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);