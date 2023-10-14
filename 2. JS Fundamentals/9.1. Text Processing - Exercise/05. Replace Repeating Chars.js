function replaceRepeatingChars(text) {
    let output = '';

    for (let index = 0; index < text.length; index++) {
        let currentElement = text[index];
        let previousElement = text[index - 1];

        if (currentElement !== previousElement) {
            output += currentElement;
        }        
    }

    console.log(output);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');