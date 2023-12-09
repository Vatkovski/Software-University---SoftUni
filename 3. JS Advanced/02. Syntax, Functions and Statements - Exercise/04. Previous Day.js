function previousDay(year, month, day) {
    let date = new Date(year, month - 1, day);
    date.setDate(day - 1);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

console.log(previousDay(2016, 9, 30)); 
console.log(previousDay(2015, 5, 10)); 
