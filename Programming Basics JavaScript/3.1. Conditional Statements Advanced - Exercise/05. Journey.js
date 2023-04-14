function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let freeTime
    let destination
    let moneySpent
    let shelter

    if (season === "summer") {
        shelter = "Camp"
    } else {
        shelter = "Hotel"
    }


   

    if (budget <= 100 && season === "summer") {
        destination = "Bulgaria"
        moneySpent = budget * 0.3
    }
    if (budget <= 100 && season === "winter") {
        destination = "Bulgaria"
        moneySpent = budget * 0.7
    }

    if (budget <= 1000 && budget > 100 && season === "summer") {
        destination = "Balkans"
        moneySpent = budget * 0.4
    }    
    if (budget <= 1000 && budget > 100 && season === "winter") {
        destination = "Balkans"
        moneySpent = budget * 0.8
    }    

    if (budget > 1000) {
        destination = "Europe"
        moneySpent = budget * 0.9
    }    

    if (destination === "Europe") {
        shelter = "Hotel"
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${shelter} - ${moneySpent.toFixed(2)}`);


}

journey(["1500", "summer"])