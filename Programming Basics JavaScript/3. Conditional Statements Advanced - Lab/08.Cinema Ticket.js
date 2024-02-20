function ticketPrice(daysOfWeek) {

    let dayOfWeek = daysOfWeek[0];
    let price;
    switch (dayOfWeek) {
        case "Monday":
        case "Tuesday":
        case "Friday":
            price = 12;
            break;
        case "Wednesday":
        case "Thursday":
            price = 14;
            break;
        case "Saturday":
        case "Sunday":
            price = 16;
            break;
        default:
            console.log("Invalid day of the week");
            return;
    }
    return price;
}


console.log(ticketPrice(["Friday"]));
console.log(ticketPrice(["Monday"]));
console.log(ticketPrice(["Sunday"])); 
