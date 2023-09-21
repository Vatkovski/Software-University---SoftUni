function tseamAccount(input) {
    let games = input.shift().split(' ');

    for(let i=0; i<input.length-1; i++) {
        let [command, game] = input[i].split(' ');

        if(command === 'Install' && !games.includes(game)) {
            games.push(game);
        } else if(command === 'Uninstall' && games.includes(game)) {
            games = games.filter(g => g !== game);
        } else if(command === 'Update' && games.includes(game)) {
            games = games.filter(g => g !== game);
            games.push(game);
        } else if(command === 'Expansion') {
            let [game, expansion] = game.split('-');
            if(games.includes(game)) {
                let index = games.indexOf(game);
                games.splice(index+1, 0, `${game}:${expansion}`);
            }
        }
    }

    console.log(games.join(' '));
}

tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);
tseamAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!']);
