function equalSumsEvenOddPosition(input) {
    let numberOne = Number(input[0]);
    let numberTwo = Number(input[1]);
    let output = "";

    for (let j = numberOne; j <= numberTwo; j++) {
        let sumEven = 0;
        let sumOdd = 0;
        let jAsString = String(j);

        for (let i = 0; i < jAsString.length; i++) {
            if (i % 2 === 0) {
                let even = Number(jAsString[i]);
                sumEven += even;
            } else {
                let odd = Number(jAsString[i]);
                sumOdd += odd;
            }
        }

        if (sumEven === sumOdd) {
            output += `${j} `;
        }
    }

    console.log(output);
}

equalSumsEvenOddPosition(["100000", "100050"]);