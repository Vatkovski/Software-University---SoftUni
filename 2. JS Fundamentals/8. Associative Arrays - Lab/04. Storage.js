function storage(arr) {
    let map = new Map();
    
    for (let string of arr) {
        let tokens = string.split(' ');
        let product = tokens[0];
        let quantity = Number(tokens[1]);        

        if (!map.has(product)) {
            map.set(product, +quantity);            
        } else {
            let currQuantity = map.get(product);
            let newQuantity = currQuantity += quantity;
            map.set(product, newQuantity);
        }
    }

    for (let [name, totalQuantity] of map) {
        console.log(`${name} -> ${totalQuantity}`);
    }
}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);