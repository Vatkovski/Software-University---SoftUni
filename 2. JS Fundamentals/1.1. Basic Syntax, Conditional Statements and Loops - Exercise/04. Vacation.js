function vacation(numberOfPeople, typeOfGroup, dayOfWeek) {
    let totalPrice = 0;

    if (dayOfWeek === "Friday") {
        if (typeOfGroup === "Students") {
            totalPrice = numberOfPeople * 8.45;
            if (numberOfPeople >= 30) {
                totalPrice *= 0.85;
            }
        } else if (typeOfGroup === "Business") {
            totalPrice = numberOfPeople * 10.90;
            if (numberOfPeople >= 100) {
                totalPrice = (numberOfPeople - 10) * 10.9;
            }
        } else if (typeOfGroup === "Regular") {
            totalPrice = numberOfPeople * 15;
            if (numberOfPeople >= 10 && numberOfPeople <= 20) {
                totalPrice *= 0.95;
            }
        }
    }

    if (dayOfWeek === "Saturday") {
        if (typeOfGroup === "Students") {
            totalPrice = numberOfPeople * 9.80;
            if (numberOfPeople >= 30) {
                totalPrice *= 0.85;
            }
        } else if (typeOfGroup === "Business") {
            totalPrice = numberOfPeople * 15.60;
            if (numberOfPeople >= 100) {
                totalPrice = (numberOfPeople - 10) * 15.6;
            }
        } else if (typeOfGroup === "Regular") {
            totalPrice = numberOfPeople * 20;
            if (numberOfPeople >= 10 && numberOfPeople <= 20) {
                totalPrice *= 0.95;
            }
        }
    }

    if (dayOfWeek === "Sunday") {
        if (typeOfGroup === "Students") {
            totalPrice = numberOfPeople * 10.46;
            if (numberOfPeople >= 30) {
                totalPrice *= 0.85;
            }
        } else if (typeOfGroup === "Business") {
            totalPrice = numberOfPeople * 16;
            if (numberOfPeople >= 100) {
                totalPrice = (numberOfPeople - 10) * 16;
            }
        } else if (typeOfGroup === "Regular") {
            totalPrice = numberOfPeople * 22.50;
            if (numberOfPeople >= 10 && numberOfPeople <= 20) {
                totalPrice *= 0.95;
            }
        }
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30,
    "Students",
    "Sunday"
)

vacation(40,
"Regular",
"Saturday")

