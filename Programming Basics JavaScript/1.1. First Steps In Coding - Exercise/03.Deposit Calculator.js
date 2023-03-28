function demo(input) {
    let depositSum = Number(input[0]);
    let periodMonths = Number(input[1]);
    let percent = Number(input[2]);

    let sum = depositSum + periodMonths * ((depositSum * percent / 100) / 12);
    console.log(sum);
}

demo(["200 ", "3 ", "5.7 "]);