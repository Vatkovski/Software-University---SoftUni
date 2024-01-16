function filterEmployees(data, criteria) {
    let employees = JSON.parse(data);
    let [key, value] = criteria.split('-');
    let counter = 0;

    employees
        .filter(e => e[key] === value || criteria === 'all')
        .forEach(e => console.log(`${counter++}. ${e.first_name} ${e.last_name} - ${e.email}`));
}

let data = `[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`;

filterEmployees(data, 'last_name-Johnson');
