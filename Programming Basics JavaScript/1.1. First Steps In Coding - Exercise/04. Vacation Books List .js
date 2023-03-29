function vacationBooksList(input) {
    let pages = Number(input[0]);
    let pagesFor1Hour = Number(input[1]);
    let days = Number(input[2]);

    let hoursEveryDay = (pages / pagesFor1Hour) / days;
    console.log(hoursEveryDay);
}

vacationBooksList(["212 ","20 ","2 "]);