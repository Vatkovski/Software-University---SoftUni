function calculatePrice(inputArray) {
    let product = inputArray[0];
    let city = inputArray[1];
    let quantity = parseFloat(inputArray[2]);

    let prices = {
        "Sofia": { "coffee": 0.50, "water": 0.80, "beer": 1.20, "sweets": 1.45, "peanuts": 1.60 },
        "Plovdiv": { "coffee": 0.40, "water": 0.70, "beer": 1.15, "sweets": 1.30, "peanuts": 1.50 },
        "Varna": { "coffee": 0.45, "water": 0.70, "beer": 1.10, "sweets": 1.35, "peanuts": 1.55 }
    };

    return prices[city][product] * quantity;
}

console.log(calculatePrice(["coffee", "Varna", "2"]));  // 0.9
console.log(calculatePrice(["peanuts", "Plovdiv", "1"]));  // 1.5
console.log(calculatePrice(["beer", "Sofia", "6"]));  // 7.2
console.log(calculatePrice(["water", "Plovdiv", "3"]));  // 2.1
console.log(calculatePrice(["sweets", "Sofia", "2.23"]));  // 3.2335
