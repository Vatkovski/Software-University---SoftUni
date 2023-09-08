function wordTracker(input) {
    let words = new Map();

    let wordsToCheck = input.shift().split(' ');

    wordsToCheck.forEach(word => {
        words.set(word, 0);
    });

    for (const line of input) {
        for (const word of wordsToCheck) {
            
            if (line === word) {
                let currentQuantity = words.get(line);
                words.set(line, currentQuantity + 1);
            }
        }
    }

    let sortedWords = Array.from(words.entries())
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