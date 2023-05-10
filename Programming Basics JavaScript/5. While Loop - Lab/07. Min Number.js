function minNumber(input) {


    let index = 0;
    let minNumber = Number.MAX_SAFE_INTEGER;


    while (index < input.length) {
        let number = Number(input[index]);

        if (input[index] === "Stop") {
            break;
        }
        if (number < minNumber) {
            minNumber = number;
        }
        index++
    }
    console.log(minNumber);
}



minNumber(["-10",
"20",
"-30",
"Stop"])








