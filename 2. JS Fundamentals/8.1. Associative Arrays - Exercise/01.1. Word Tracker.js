function wordTracker(input) {
    let wordsToCheck = input.shift().split(' ');
    let words = {};
    
    for (const word of wordsToCheck) {
        words[word] = 0;
    }

    for (const word of input) {        
        if (words.hasOwnProperty(word)) {
            words[word]++;
        }
    }

    let sortedWords = Object.entries(words).sort((a, b) => b[1] - a[1]);
    
    for (const [word, count] of sortedWords) {
        console.log(`${word} - ${count}`);
    }
}

wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ]);