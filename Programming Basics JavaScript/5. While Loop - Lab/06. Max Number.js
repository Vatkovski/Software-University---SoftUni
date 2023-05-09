function maxNumber(input) {


    let index = 0;
    let maxNumber = Number.NEGATIVE_INFINITY;


    while (index < input.length) {
        let number = Number(input[index]);

        if (input[index] === "Stop") {
            break;
        }
        if (number > maxNumber) {
            maxNumber = number;
        }
        index++
    }
    console.log(maxNumber);
}



maxNumber(["-10",
    "20",
    "-30",
    "Stop"])








