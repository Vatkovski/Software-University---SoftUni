function  sumPrimeNonPrime (input) {

    let sumOfPrime = 0;
    let sumOfNonPrime = 0;
    let i = 0;
    let number = input[i];

    while (number !== "stop") {
    
        number = Number(input[i]);
        if (number < 0) {
            console.log("Number is negative.");
            i++
            number = input[i];
            continue;
        } else if (number > 3 && (number % 2 === 0 || number % 3 === 0)) {
            sumOfNonPrime += number;
        } else {
            sumOfPrime += number;
        }
                
        i++
        number = input[i];

    }

    console.log(`Sum of all prime numbers is: ${sumOfPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumOfNonPrime}`);
}


 sumPrimeNonPrime (["3", "9", "0", "7", "19", "4", "stop"])
 








