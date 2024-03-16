class FashionRetailInventory {
  constructor(storehouse, location) {
    this.storehouse = storehouse;
    this.location = location;
    this.productStock = [];
  }

  addProduct(productName, size, quantity, price) {
    const existingProduct = this.productStock.find(
      (product) => product.productName === productName && product.size === size
    );

    if (existingProduct) {
      existingProduct.quantity += quantity;
      return `You added ${quantity} more pieces of product ${productName} size ${size}`;
    } else {
      const newProduct = { productName, size, quantity, price };
      this.productStock.push(newProduct);
      return `The product ${productName}, size ${size} was successfully added to the inventory`;
    }
  }


  sendProduct(productName, size) {
    const index = this.productStock.findIndex(
      (product) => product.productName === productName && product.size === size
    );

    if (index === -1) {
      throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
    } else {
      const removedProduct = this.productStock.splice(index, 1)[0];
      return `The product ${productName}, size ${size} was successfully removed from the inventory`;
    }
  }

  findProductsBySize(size) {
    const matchingProducts = this.productStock.filter((product) => product.size === size);

    if (matchingProducts.length === 0) {
      return "There are no products available in that size";
    } else {
      const productInfo = matchingProducts
        .map((product) => `${product.productName}-${product.quantity} pieces`)
        .join(", ");
      return productInfo;
    }
  }


  listProducts() {
    if (this.productStock.length === 0) {
      return `${this.storehouse} storehouse is empty`;
    }
    this.productStock.sort((a, b) => a.productName.localeCompare(b.productName));
    const productInfo = this.productStock.map(
      (product) =>
        `${product.productName}/Size:${product.size}/Quantity:${product.quantity}/Price:${product.price}$`
    );

    return `${this.storehouse} storehouse in ${this.location} available products:\n${productInfo.join(
      "\n"
    )}`;
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