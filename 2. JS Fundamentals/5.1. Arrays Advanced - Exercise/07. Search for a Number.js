function searchForNumber(array1, array2) {
    let elementsToTake = array2[0];
    let elementsToDelete = array2[1];
    let searchThisNumber = array2[2];

    let elements = array1.slice(0, elementsToTake)
        elements.splice(0, elementsToDelete);
    let count = elements.filter(x => x === searchThisNumber).length;

    console.log(`Number ${searchThisNumber} occurs ${count} times.`);
}

searchForNumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
    );