function isOfficeOpen(inputArray) {
    var hour = Number(inputArray[0]);
    var day = inputArray[1];
    if (hour >= 10 && hour < 18 && day !== "Sunday") {
        return "open";
    } else {
        return "closed";
    }
}

console.log(isOfficeOpen(["11", "Monday"]));
