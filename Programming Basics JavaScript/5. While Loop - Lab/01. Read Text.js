function  readText(input) {
 
    let index = 0;
    

    while (index < input.length) {
        if (input[index] === "Stop") {
            break;
        }
        console.log(input[index]);
        index++

    }

 }

 readText(["Nakov",
 "SoftUni",
 "Sofia",
 "Bulgaria",
 "SomeText",
 "Stop",
 "AfterStop",
 "Europe",
 "HelloWorld"])
 
