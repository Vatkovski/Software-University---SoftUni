function concatenateData(input) {
    let [firstName, lastName, age, town] = input;
    let message = "You are " + firstName + " " + lastName + ", a " + age + "-years old person from " + town + ".";
    console.log(message);
}


concatenateData(['Maria', 'Ivanova', 20, 'Sofia'])