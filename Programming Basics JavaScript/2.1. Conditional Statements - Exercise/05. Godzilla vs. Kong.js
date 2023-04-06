function demo(input) {
    let budget = Number(input[0]);
    let people = Number(input[1]);
    let suitPrice = Number(input[2]);
    let decorPrice = budget * 0.1;
    let suitesTotalPrice = people * suitPrice;
 
    if (people > 150) {
        suitesTotalPrice = suitesTotalPrice - (suitesTotalPrice * 0.1);
    }
 
    let difference = budget - (suitesTotalPrice + decorPrice);
 
    if (difference >= 0) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${difference.toFixed(2)} leva left.`);
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${Math.abs(difference).toFixed(2)} leva more.`);
    }
}

demo(["20000", "120", "55.5"])