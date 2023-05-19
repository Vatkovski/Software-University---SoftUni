function combinations(input) {
    let num = Number(input[0]);
    let combinations = 0; 

    for (let num1 = 0; num1 <= num; num1++) {
        for (let num2 = 0; num2 <= num; num2++) {
            for (let num3 = 0; num3 <= num; num3++) {
                let result = num1 + num2 + num3;
                if (result === num) {
                    combinations++  
                }
            }
        }
    }
    console.log(`${combinations}`);
}


combinations(["20"])
