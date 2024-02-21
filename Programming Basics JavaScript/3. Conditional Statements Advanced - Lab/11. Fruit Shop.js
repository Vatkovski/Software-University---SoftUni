function calculateFruitPrice(inputArray) {
    let fruit = inputArray[0];
    let day = inputArray[1];
    let quantity = Number(inputArray[2]);

    let priceList = {
        "workdays": {
            "banana": 2.50,
            "apple": 1.20,
            "orange": 0.85,
            "grapefruit": 1.45,
            "kiwi": 2.70,
            "pineapple": 5.50,
            "grapes": 3.85
        },
        "weekend": {
            "banana": 2.70,
            "apple": 1.25,
            "orange": 0.90,
            "grapefruit": 1.60,
            "kiwi": 3.00,
            "pineapple": 5.60,
            "grapes": 4.20
        }
    };

    let dayType = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].includes(day) ? "workdays" : "weekend";

    if (priceList[dayType][fruit]) {
        return (priceList[dayType][fruit] * quantity).toFixed(2);
    } else {
        return "error";
    }
}


console.log(calculateFruitPrice(["orange",
    "Sunday",
    "3"]));
