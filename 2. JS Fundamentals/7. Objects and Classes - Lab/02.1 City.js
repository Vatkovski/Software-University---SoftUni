function cityInfo(arr) {
    for (const key in arr) {
        console.log(`${key} -> ${arr[key]}`);
    }
}
cityInfo({
  name: "Plovdiv",
  area: 389,
  population: 1162358,
  country: "Bulgaria",
  postCode: "4000",
});