function armyInfo(input) {
    let leaders = {};

    for (let line of input) {
        if (line.includes('arrives')) {
            let leader = line.split(' ')[0];
            leaders[leader] = {};
        } else if (line.includes('defeated')) {
            let leader = line.split(' ')[0];
            delete leaders[leader];
        } else if (line.includes(':')) {
            let [leader, armyInfo] = line.split(': ');
            let [armyName, armyCount] = armyInfo.split(', ');
            if (leaders[leader]) {
                leaders[leader][armyName] = Number(armyCount);
            }
        } else if (line.includes('+')) {
            let [armyName, armyCount] = line.split(' + ');
            for (let leader in leaders) {
                if (leaders[leader][armyName]) {
                    leaders[leader][armyName] += Number(armyCount);
                }
            }
        }
    }

    let sortedLeaders = Object.entries(leaders).sort((a, b) => {
        let aTotal = Object.values(a[1]).reduce((a, b) => a + b, 0);
        let bTotal = Object.values(b[1]).reduce((a, b) => a + b, 0);
        return bTotal - aTotal;
    });

    for (let [leader, armies] of sortedLeaders) {
        let totalArmyCount = Object.values(armies).reduce((a, b) => a + b, 0);
        console.log(`${leader}: ${totalArmyCount}`);
        let sortedArmies = Object.entries(armies).sort((a, b) => b[1] - a[1]);
        for (let [armyName, armyCount] of sortedArmies) {
            console.log(`>>> ${armyName} - ${armyCount}`);
        }
    }
}

armyInfo(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205'])