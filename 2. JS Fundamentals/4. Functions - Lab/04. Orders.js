function orders(product, quantity) {
    const prices = {
        coffee: 1.50,
        water: 1.00,
        coke: 1.40,
        snacks: 2.00
    };
    return (prices[product] * quantity).toFixed(2);
}

console.log(orders("water", 5));