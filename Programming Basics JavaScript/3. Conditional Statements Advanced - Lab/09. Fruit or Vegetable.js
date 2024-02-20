function identifyProduct(products) {
    if (products.length !== 1) {
        console.log("Моля, въведете само един продукт.");
        return;
    }
    let product = products[0];
    let fruits = ["banana", "apple", "kiwi", "cherry", "lemon", "grapes"];
    let vegetables = ["tomato", "cucumber", "pepper", "carrot"];
    if (fruits.includes(product)) {
        return "fruit";
    } else if (vegetables.includes(product)) {
        return "vegetable";
    } else {
        return "unknown";
    }
}


console.log(identifyProduct(["banana"]));
console.log(identifyProduct(["apple"]));
console.log(identifyProduct(["tomato"]));
console.log(identifyProduct(["water"]));  
