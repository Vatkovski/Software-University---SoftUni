function createCityRecord(name, population, treasury) {
    return {
      name: name,
      population: population,
      treasury: treasury
    };
  }
  
  let city = createCityRecord('Tortuga', 7000, 15000);
console.log(city);
