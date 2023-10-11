function subString(string, startIndex, count) {
    let result = string.substring(startIndex, count + startIndex)
    console.log(result);
}

subString('ASentence', 1, 8);