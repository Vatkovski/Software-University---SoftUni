function convertToJson(name, lastName, hairColor) {
    let personInfo = new Object;
    personInfo.name = name;
    personInfo.lastName = lastName;
    personInfo.hairColor = hairColor;
    console.log(JSON.stringify(personInfo));
}
convertToJson('George', 'Jones', 'Brown');