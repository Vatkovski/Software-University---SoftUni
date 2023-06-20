function echoType(parameter) {
    console.log(typeof (parameter));
    // solution using ternary operator 
    let output = (typeof (parameter) === `string` || typeof (parameter) === `number`) ? parameter : `Parameter is not suitable for printing`;
    console.log(output);
    // solution using if else
    // if (typeof(parameter) === `string` || typeof(parameter) === `number`) {
    //     console.log(parameter);
    // } else {
    //     console.log(`Parameter is not suitable for printing`);
    // }    
}

echoType(null)



