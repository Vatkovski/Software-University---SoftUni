function studyMaterials(input) {
    let pens = Number(input[0]);
    let marker = Number(input[1]);
    let detergent = Number(input[2]);
    let discount = Number(input[3]);

    let allPensPrice = pens * 5.80;
    let allMarkersPrice = marker * 7.20;
    let allDetergentPrice = detergent * 1.20;

    let totalPrice = allPensPrice + allMarkersPrice + allDetergentPrice;
    let priceAfterDiscount = totalPrice - (totalPrice * (discount / 100 ));

    console.log(priceAfterDiscount);
}

studyMaterials(["2 ",

    "3 ",

    "4 ",

    "25 "]);