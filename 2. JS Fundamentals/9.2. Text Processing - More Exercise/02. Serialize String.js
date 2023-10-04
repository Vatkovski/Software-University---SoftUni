function serializeString(input) {
    let str = input[0];
    let charMap = {};

    for(let i = 0; i < str.length; i++) {
        let char = str[i];
        if(!charMap[char]) {
            charMap[char] = [];
        }
        charMap[char].push(i);
    }

    let result = '';
    for(let char in charMap) {
        result += `${char}:${charMap[char].join('/')}\n`;
    }

    return result.trim();
}

console.log(serializeString(["avjavamsdmcalsdm"]));
