function storeCatalogue(input) {
    let catalogue = {};

    for (let i = 0; i < input.length; i++) {
        let [product, price] = input[i].split(' : ');
        price = Number(price);
        let initial = product[0];

        if (!catalogue[initial]) {
            catalogue[initial] = [];
        }

        catalogue[initial].push({ product, price });
    }

    let initials = Object.keys(catalogue).sort();

    for (let initial of initials) {
        console.log(initial);
        let products = catalogue[initial]
            .sort((a, b) => a.product.localeCompare(b.product));

        for (let product of products) {
            console.log(`  ${product.product}: ${product.price}`);
        }
    }
}

storeCatalogue(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);
