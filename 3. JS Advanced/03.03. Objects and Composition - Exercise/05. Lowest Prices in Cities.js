function lowestPricesInCities(data) {
    let products = {};

    for (let i = 0; i < data.length; i++) {
        let [town, product, price] = data[i].split(' | ');
        price = Number(price);

        if (!products[product] || products[product].price > price) {
            products[product] = { town, price };
        }
    }

    let result = [];
    for (let product in products) {
        result.push(`${product} -> ${products[product].price} (${products[product].town})`);
    }

    return result.join('\n');
}

let data = ['Sample Town | Sample Product | 1000', 'Sample Town | Orange | 2', 'Sample Town | Peach | 1', 'Sofia | Orange | 3', 'Sofia | Peach | 2', 'New York | Sample Product | 1000.1', 'New York | Burger | 10'];
console.log(lowestPricesInCities(data));
