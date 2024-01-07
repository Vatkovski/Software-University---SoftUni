function registerHeroes(heroesData) {
    let heroes = [];

    for (let i = 0; i < heroesData.length; i++) {
        let heroData = heroesData[i].split(' / ');
        let heroName = heroData[0];
        let heroLevel = Number(heroData[1]);
        let heroItems = heroData.length > 2 ? heroData[2].split(', ') : [];

        let hero = {
            name: heroName,
            level: heroLevel,
            items: heroItems
        };

        heroes.push(hero);
    }

    return JSON.stringify(heroes);
}

let heroesData = ['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara'];
console.log(registerHeroes(heroesData));
