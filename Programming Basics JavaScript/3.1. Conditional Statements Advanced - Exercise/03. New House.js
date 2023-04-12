function newHome(input) {
    let typeOfFlower = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);
    let totalPrice = 0;
 
    switch(typeOfFlower) {
        case "Roses":
            totalPrice = flowersCount * 5.00;
            break;
        case "Dahlias":
            totalPrice = flowersCount * 3.80;
            break;
        case "Tulips":
            totalPrice = flowersCount * 2.80;
            break;
        case "Narcissus":
            totalPrice = flowersCount * 3;
            break;
        case "Gladiolus":
            totalPrice = flowersCount * 2.5;
            break;
    }
 
    if (typeOfFlower === "Roses" && flowersCount > 80) {
        totalPrice = totalPrice - (totalPrice * 0.1);
    } else if (typeOfFlower === "Dahlias" && flowersCount > 90) {
        // totalPrice *= 0.85; moje i taka da se napishe, ednoznachni sa
        // totalPrice = totalPrice * 0.85 moje i taka da se napishe, ednoznachni sa
        totalPrice = totalPrice - (totalPrice * 0.15);
    } else if (typeOfFlower === "Tulips" && flowersCount > 80) {
        totalPrice = totalPrice - (totalPrice * 0.15);
    } else if (typeOfFlower === "Narcissus" && flowersCount < 120) {
        totalPrice = totalPrice + (totalPrice * 0.15);
    } else if (typeOfFlower === "Gladiolus" && flowersCount < 80) {
        totalPrice = totalPrice + (totalPrice * 0.2);
    }
 
    let difference = budget - totalPrice;
    
    if (difference >= 0) {
        console.log(`Hey, you have a great garden with ${flowersCount} ${typeOfFlower} and ${difference.toFixed(2)} leva left.`)
    } else {
        let sumFormatted = Math.abs(difference).toFixed(2);
 
        console.log(`Not enough money, you need ${sumFormatted} leva more.`)
    }
}

newHome(["Roses",

"55",

"250"]);