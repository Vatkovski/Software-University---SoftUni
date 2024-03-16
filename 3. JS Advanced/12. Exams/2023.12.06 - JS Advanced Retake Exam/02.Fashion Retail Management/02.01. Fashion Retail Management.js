class FashionRetailInventory {
    constructor(storehouse, location) {
        this.storehouse = storehouse;
        this.location = location;
        this.productStock = [];
    }

    addProduct(productName, size, quantity, price) {
        const product = this.productStock.find(p => p.productName === productName && p.size === size);
        if (product) {
            product.quantity += quantity;
            return `You added ${quantity} more pieces of product ${productName} size ${size}`;
        } else {
            this.productStock.push({ productName, size, quantity, price });
            return `The product ${productName}, size ${size} was successfully added to the inventory`;
        }
    }

    sendProduct(productName, size) {
        const index = this.productStock.findIndex(p => p.productName === productName && p.size === size);
        if (index === -1) {
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
        } else {
            this.productStock.splice(index, 1);
            return `The product ${productName}, size ${size} was successfully removed from the inventory`;
        }
    }

    findProductsBySize(size) {
        const products = this.productStock.filter(p => p.size === size);
        if (products.length === 0) {
            return 'There are no products available in that size';
        } else {
            return products.map(p => `${p.productName}-${p.quantity} pieces`).join(', ');
        }
    }

    listProducts() {
        if (this.productStock.length === 0) {
            return `${this.storehouse} storehouse is empty`;
        } else {
            let output = `${this.storehouse} storehouse in ${this.location} available products:\n`;
            this.productStock.sort((a, b) => a.productName.localeCompare(b.productName))
                .forEach(p => {
                    output += `${p.productName}/Size:${p.size}/Quantity:${p.quantity}/Price:${p.price}$\n`;
                });
            return output;
        }
    }
}



const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("Shirt", "L", 10, 25.0));
console.log(storeHouse.addProduct("Jacket", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-shirt", "M", 10, 25.0));
console.log(storeHouse.listProducts());




// console.log(storeHouse.findProductsBySize("XL"));
// console.log(storeHouse.sendProduct("Jacket", "M"));
// console.log(storeHouse.sendProduct("T-shirt", "M"));
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));



// console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
// console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));
//   console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));