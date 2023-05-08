function sequence(input) {

    let number = input[0];
    let sequenceOfNumbers = 1;

    while (sequenceOfNumbers <= number) {
        console.log(sequenceOfNumbers);
        sequenceOfNumbers = sequenceOfNumbers * 2 + 1;
    }

}
sequence(["31"])



