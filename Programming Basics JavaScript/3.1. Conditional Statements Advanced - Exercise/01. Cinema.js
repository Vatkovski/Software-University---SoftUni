function cinema(input) {
    let typeOfProjection = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);
    let totalSeats = rows * cols;
    let totalSum = 0;
 
    if (typeOfProjection === "Premiere") {
        totalSum = totalSeats * 12.00;
    } else if (typeOfProjection === "Normal") {
        totalSum = totalSeats * 7.50;
    } else if (typeOfProjection === "Discount") {
        totalSum = totalSeats * 5.00;
    }
 
    console.log(`${totalSum.toFixed(2)} leva`);
}

cinema(["Discount", "12", "30"]);