function storeProvision(firstArray, secondArray) {
    
    let localStoreStorage = {};

    for (let i = 0; i < firstArray.length; i+=2) {
        let product = firstArray[i];        
        let quantity = Number(firstArray[i +1]);        
        localStoreStorage[product] = quantity;        
    }

    for (let i = 0; i < secondArray.length; i+=2) {
        let product = secondArray[i];
        
        if (!localStoreStorage.hasOwnProperty(product)) {
            localStoreStorage[product] = 0;
        }
        
        localStoreStorage[product] += Number(secondArray[i + 1]);
    }

    for (const productKey in localStoreStorage) {
        console.log(`${productKey} -> ${localStoreStorage[productKey]}`);            
        }
    }


storeProvision([ 'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2' ], 
[ 'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30' ]);