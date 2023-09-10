function oddOccurrences(sentence) {
    let elements = sentence.split(' ');
    let words = [];

    for (const element of elements) {
        let lowerCaseElement = element.toLowerCase();
        let wordIndex = words.findIndex(word => word.text === lowerCaseElement);
        if (wordIndex === -1) {
            words.push({ text: lowerCaseElement, count: 1 });
        } else {
            words[wordIndex].count++;
        }
    }

    let oddWords = words.filter(word => word.count % 2 !== 0).map(word => word.text);
    console.log(oddWords.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
