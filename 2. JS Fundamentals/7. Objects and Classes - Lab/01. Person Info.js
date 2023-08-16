function searchForNumber(firstName, lastName, age) {
    let person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;

    return person;
}

console.log(searchForNumber("Peter", 
"Pan",
"20"));