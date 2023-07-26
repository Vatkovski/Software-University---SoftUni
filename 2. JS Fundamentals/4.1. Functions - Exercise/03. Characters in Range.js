function CharactersInRange(charA, charB) {
    let numFromCharA = charA.charCodeAt(0);
    let numFromCharB = charB.charCodeAt(0);
    let allCharactersInRange = "";

    let startIndex = numFromCharA > numFromCharB ? numFromCharB : numFromCharA;
    let endIndex = numFromCharA > numFromCharB ? numFromCharA : numFromCharB;

    for (let i = startIndex + 1; i < endIndex; i++) {
        allCharactersInRange += String.fromCharCode(i) + ' ';
        
    }
    return allCharactersInRange;
}

console.log(CharactersInRange('a',
'd')); 