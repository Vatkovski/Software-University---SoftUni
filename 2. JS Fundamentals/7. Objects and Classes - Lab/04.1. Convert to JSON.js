function convertToJSON (fName, lName, colorOfHair) {
    let person = {
        name: fName,
        lastName: lName,
        hairColor: colorOfHair
    }
    return JSON.stringify(person)

}
console.log(convertToJSON('George', 'Jones', 'Brown'))