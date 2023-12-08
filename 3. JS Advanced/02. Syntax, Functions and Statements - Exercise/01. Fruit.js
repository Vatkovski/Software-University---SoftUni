function calculateFruitCost(fruit, weightInGrams, pricePerKg) {
    let weightInKg = weightInGrams / 1000;
    let moneyNeeded = weightInKg * pricePerKg;
    return `I need $${moneyNeeded.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`;
}

console.log(calculateFruitCost('orange', 2500, 1.80)); 
console.log(calculateFruitCost('apple', 1563, 2.35)); 
