function demo(input) {
    let excursionPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let teddyBears = Number(input[3]);
    let minions = Number(input[4]);
    let lorries = Number(input[5]);
 
    let sum = puzzles * 2.6 + dolls * 3 + teddyBears * 4.10 + minions * 8.20 + lorries * 2;
    let toysCount = puzzles + dolls + teddyBears + minions + lorries;
 
    if (toysCount >= 50) {
        sum = sum - (sum * 0.25);
    }
    
    let earningsAfterRent = sum - (sum * 0.1);
    let difference = earningsAfterRent - excursionPrice;
 
    if (difference >= 0) {
        console.log(`Yes! ${difference.toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${Math.abs(difference).toFixed(2)} lv needed.`)
    }
}
demo(["40.8", "20", "25", "30", "50", "10"])
demo(["320", "8", "2", "5", "5", "1"])