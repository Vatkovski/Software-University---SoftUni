function solution() {
    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let recipes = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    };

    return function(input) {
        let [command, item, quantity] = input.split(' ');
        quantity = Number(quantity);

        switch (command) {
            case 'restock':
                ingredients[item] += quantity;
                return 'Success';
            case 'prepare':
                let recipe = recipes[item];
                for (let ingredient in recipe) {
                    if (recipe[ingredient] * quantity > ingredients[ingredient]) {
                        return `Error: not enough ${ingredient} in stock`;
                    }
                }
                for (let ingredient in recipe) {
                    ingredients[ingredient] -= recipe[ingredient] * quantity;
                }
                return 'Success';
            case 'report':
                return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
        }
    }
}

let manager = solution();
console.log(manager("restock flavour 50")); 
// console.log(manager("prepare lemonade 4")); 
