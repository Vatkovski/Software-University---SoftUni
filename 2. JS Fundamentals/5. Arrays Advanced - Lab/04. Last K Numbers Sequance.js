function LastKNumbersSequance(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let lastNumbers = result.slice(-k);
        let sum = 0;
        
        for (num of lastNumbers) {
            sum += num;            
        }

        result.push(sum);        
    }

    console.log(result.join(' '));
}

LastKNumbersSequance(6, 3);