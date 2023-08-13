function sorting(arr) {
    let result = [];
    let sorted = arr.sort((a, b) => b - a);   
    while (sorted.length > 0) {
        result.push(sorted.shift());
        result.push(sorted.pop());
    }
    console.log(result.join(' ')); 
}

sorting([1, 21, 3, 52, 69, 63, 31,
    2, 18, 94]
    );