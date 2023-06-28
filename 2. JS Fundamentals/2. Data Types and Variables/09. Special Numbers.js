function specialNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let sum = 0;
        let num = i;
        while (num > 0) {
            sum += num % 10;
            num = parseInt(num / 10);
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }    
}
}

specialNumbers(15);