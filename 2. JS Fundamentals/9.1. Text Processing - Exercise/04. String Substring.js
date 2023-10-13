function stringSubstring(word, text) {
    let wordsInText = text.split(' ');
    let isNotFound = true;

    for (const el of wordsInText) {
        if (word.toLowerCase() === el.toLowerCase()) {
            console.log(word);
            isNotFound = false;
            break;
        }
    }

    if (isNotFound) {
        console.log(`${word} not found!`);
    }
}

stringSubstring('javascript',
'JavaScript is the best programming language');