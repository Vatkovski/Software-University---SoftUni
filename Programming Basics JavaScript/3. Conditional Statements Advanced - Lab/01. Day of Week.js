function dayOfWeek(number) {
    let dayInNumber = Number(number);
    switch (dayInNumber) {
        case 1:
            console.log("Monday");
            break
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Error";
    }
}

dayOfWeek(["2"])

