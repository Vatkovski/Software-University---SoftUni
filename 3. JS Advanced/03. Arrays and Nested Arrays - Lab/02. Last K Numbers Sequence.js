function generateSequence(n, k) {
    let sequence = [1]; // The first element is 1

    for(let i = 1; i < n; i++) {
        let start = Math.max(0, i - k);
        let end = i;
        let sum = sequence.slice(start, end).reduce((a, b) => a + b, 0);
        sequence.push(sum);
    }

    return sequence;
}

generateSequence(6, 3);