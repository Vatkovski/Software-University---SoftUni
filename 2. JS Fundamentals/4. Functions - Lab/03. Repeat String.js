function repeatString(string, repeatTimes) {
    let output = "";
     for (let i = 0; i < repeatTimes; i++) {
     output += string;    
    }
    return output;
 }
 
 console.log(repeatString("abc", 3));