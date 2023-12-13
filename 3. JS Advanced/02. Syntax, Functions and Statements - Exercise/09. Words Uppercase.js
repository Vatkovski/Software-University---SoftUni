function wordsToUppercase(input) {
    let words = input.match(/\b\w+\b/g);
    let result = words.map(word => word.toUpperCase());
    return result.join(", ");
}


console.log(wordsToUppercase('Hi, how are you?'));
// console.log(wordsToUppercase('hello')); 
