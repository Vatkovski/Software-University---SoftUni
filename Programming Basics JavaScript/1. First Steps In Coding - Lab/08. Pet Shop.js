function calculatePetFoodCost(dogFoodPacks, catFoodPacks) {
    const dogFoodPrice = 2.50; 
    const catFoodPrice = 4.00; 

    let totalCost = (dogFoodPacks * dogFoodPrice) + (catFoodPacks * catFoodPrice);

    console.log(`${totalCost} lv.`);
}

calculatePetFoodCost(5, 4); 
