function calculateLandscapingCost(area) {
    const pricePerSquareMeter = 7.61;
    const discountRate = 0.18;

    let totalCost = area * pricePerSquareMeter;
    let discount = totalCost * discountRate;
    let finalPrice = totalCost - discount;

    console.log(`The final price is: ${finalPrice.toFixed(2)} lv.`);
    console.log(`The discount is: ${discount.toFixed(2)} lv.`);
}

calculateLandscapingCost(["550"]);
