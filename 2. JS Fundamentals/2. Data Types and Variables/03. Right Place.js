function rightPlace(str, char, result) {
    let res = str.replace('_', char);
    let output = res === result? "Matched": "Not Matched";
    console.log(output);
}

rightPlace('Str_ng', 'i', 'String')



