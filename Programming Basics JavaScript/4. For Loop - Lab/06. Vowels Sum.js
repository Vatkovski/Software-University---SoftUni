function vowelsSum(input) {
 
    let word = input[0];
    let sumOfVowels = 0;
    // a	e	i	o	u
    // 1	2	3	4	5
 
    for (let index = 0; index < word.length; index++) {
 
        let currentLetter = word[index];
 
        switch (currentLetter) {
            case 'a': sumOfVowels += 1; break;
            case 'e': sumOfVowels += 2; break;
            case 'i': sumOfVowels += 3; break;
            case 'o': sumOfVowels += 4; break;
            case 'u': sumOfVowels += 5; break;
        }
    }
    console.log(sumOfVowels);
 
}
vowelsSum(["aaaaua"]);