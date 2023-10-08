function santasSecretHelper(input) {
    let key = Number(input.shift());
    let pattern = /@([A-Za-z]+)[^@\-!:>]*!([GN])!/g;
    let children = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'end') {
            break;
        }

        let decryptedMessage = input[i].split('').map(c => String.fromCharCode(c.charCodeAt(0) - key)).join('');
        let match = pattern.exec(decryptedMessage);

        while (match) {
            if (match[2] === 'G') {
                children.push(match[1]);
            }

            match = pattern.exec(decryptedMessage);
        }
    }

    console.log(children.join('\n'));
}

santasSecretHelper(['3', 'CNdwhamigyenumje$J$', 'CEreelh-nmguuejnW$J$', 'CVwdq&gnmjkvng$Q$', 'end']);
console.log(".............");
santasSecretHelper(['3', 'N}eideidmk$\'(mnyenmCNlpamnin$J$', 'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge', 'ppqmkkkmnolmnnCEhq/vkievk$Q$', 'yyegiivoguCYdohqwlqh/kguimhk$J$', 'end']);
