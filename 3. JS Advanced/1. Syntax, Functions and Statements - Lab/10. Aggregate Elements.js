function aggregateElements(elements) {
    let sum = elements.reduce((a, b) => a + b, 0);
    console.log(sum);

    let sumOfInverses = elements.reduce((a, b) => a + 1/b, 0);
    console.log(sumOfInverses);

    let concatenated = elements.join('');
    console.log(concatenated);
}

aggregateElements([2, 4, 8, 16])