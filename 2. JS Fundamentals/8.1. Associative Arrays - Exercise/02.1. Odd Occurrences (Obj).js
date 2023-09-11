function oddOccurrences(sentence) {
    let elements = sentence.split(' ');
    let words = {};
    let order = {};
    let index = 0;

    for (const element of elements) {
        let lowerCaseElement = element.toLowerCase();
        if (!words.hasOwnProperty(lowerCaseElement)) {
            words[lowerCaseElement] = 1;
            order[lowerCaseElement] = index++;
        } else {
            words[lowerCaseElement]++;
        }
    }

    let keys = Object.keys(words);
    keys.sort((a, b) => order[a] - order[b]);

    let result = keys.filter(key => words[key] % 2 !== 0).join(' ');
    console.log(result);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
