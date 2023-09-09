function wordTracker(input) {
    let words = {};

    let wordsToCheck = input.shift().split(' ');

    wordsToCheck.forEach(word => {
        words[word] = 0;
    });

    for (const line of input) {
        for (const word of wordsToCheck) {
            if (line === word) {
                words[line]++;
            }
        }
    }

    let sortedWords = Object.entries(words)
        .sort((a, b) => b[1] - a[1]);

    sortedWords.forEach(element => {
        console.log(`${element.join(' - ')}`);
    })
}

wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]);
