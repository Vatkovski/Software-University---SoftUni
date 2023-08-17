function city(city) {
    for (const property of Object.keys(city)) {
        console.log(`${property} -> ${city[property]}`);
    }
}

city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
   });