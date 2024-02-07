function juiceFlavors(input) {
    let juices = {};
    let bottles = {};

    for (let i = 0; i < input.length; i++) {
        let [juice, quantity] = input[i].split(' => ');
        quantity = Number(quantity);

        if (!juices[juice]) {
            juices[juice] = 0;
        }

        juices[juice] += quantity;
        if (juices[juice] >= 1000) {
            if (!bottles[juice]) {
                bottles[juice] = 0;
            }

            while (juices[juice] >= 1000) {
                bottles[juice]++;
                juices[juice] -= 1000;
            }
        }
    }

    for (let juice in bottles) {
        console.log(`${juice} => ${bottles[juice]}`);
    }
}

juiceFlavors(['Orange => 2000', 'Peach => 1432', 'Banana => 450', 'Peach => 600', 'Strawberry => 549']);
juiceFlavors(['Kiwi => 234', 'Pear => 2345', 'Watermelon => 3456', 'Kiwi => 4567', 'Pear => 5678', 'Watermelon => 6789']);
