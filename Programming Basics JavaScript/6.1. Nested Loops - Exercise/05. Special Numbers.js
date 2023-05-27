function specialNumbers (input) {
    let n = Number(input[0]);
    let printLine = "";

    for (let i = 1111; i <= 9999; i++) {
        let iToString = i.toString();
        let isSpecial = true;

        for (let j = 0; j <  iToString.length; j++) {
            let currentDigit = Number(iToString[j]);
            
            if (n % currentDigit !== 0) {
                isSpecial = false;    
            }                       
        }
        
        if (isSpecial === true) {
            printLine += i + " ";
        }
    }
    console.log(printLine);
}

 specialNumbers (["16"])
 
 
 
 








