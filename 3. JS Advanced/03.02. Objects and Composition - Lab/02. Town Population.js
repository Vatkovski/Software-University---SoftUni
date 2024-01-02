function townPopulation(towns) {
    let registry = {};
  
    for(let i = 0; i < towns.length; i++) {
      let [town, population] = towns[i].split(' <-> ');
      population = Number(population);
  
      if(registry[town] == undefined) {
        registry[town] = population;
      } else {
        registry[town] += population;
      }
    }
  
    for(let town in registry) {
      console.log(`${town} : ${registry[town]}`);
    }
  }
  
  townPopulation(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000']);
