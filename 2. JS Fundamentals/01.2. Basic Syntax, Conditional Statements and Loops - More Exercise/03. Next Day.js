function getNextDay(year, month, day) {
    let date = new Date(year, month - 1, day);
    date.setDate(date.getDate() + 1);
    let nextDay = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    return nextDay;
}

console.log(getNextDay(2016, 9, 30)); // Outputs: 2016-10-1
