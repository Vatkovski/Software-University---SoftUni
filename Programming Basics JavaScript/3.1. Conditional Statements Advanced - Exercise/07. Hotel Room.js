function hotelRoom(input) {
    let month = (input[0]);
    let nights = Number(input[1]);

    let room
    let studioPrice
    let appartmentPrice

    if (month === "May" || month === "October" && nights > 7) {
        studioPrice = (50 - (50 * 0.05)) * nights
        if (nights > 14) {
            appartmentPrice = (65 - (65 * 0.1)) * nights
        } else {
            appartmentPrice = 65 * nights
        }

    } else if(month === "May" || month === "October") {
        studioPrice = 50 * nights
        appartmentPrice = 65 * nights
    }
    if (month === "May" || month === "October" && nights > 14) {
        studioPrice = (50 - (50 * 0.3)) * nights
        appartmentPrice = (65 - (65 * 0.1)) * nights
    } else {
        studioPrice = 50 * nights
        appartmentPrice = 65 * nights
    }

    if (month === "June" || month === "September" && nights > 14) {
        studioPrice = (75.20 - (75.20 * 0.2)) * nights
        appartmentPrice = (68.70 - (68.70 * 0.1)) * nights
    } else {
        studioPrice = 75.20 * nights
        appartmentPrice = 68.70 * nights
    }

    if (month === "July" || month === "August") {
        studioPrice = 76 * nights
        if (nights > 14) {
            appartmentPrice = (77 - (77 * 0.1)) * nights
        } else {
            appartmentPrice = 77 * nights
        }
    }



    console.log(appartmentPrice.toFixed(2));
    console.log(studioPrice.toFixed(2));


}

hotelRoom(["May",
"15"])





