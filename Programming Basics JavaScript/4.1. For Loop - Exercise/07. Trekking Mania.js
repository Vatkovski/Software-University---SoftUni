function trekkingMania(input) {

    let totalNumberPeople = 0;
    let musala = 0;
    let montblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;
  
    for (let i = 1; i < input.length; i++) {
      totalNumberPeople += Number(input[i]);
    }
  
    for (let index = 1; index < input.length; index++) {
      if (Number(input[index] <= 5)) {
        musala += Number(input[index])
      } else if (Number(input[index] <= 12)) {
        montblan += Number(input[index])
      } else if (Number(input[index] <= 25)) {
        kilimandjaro += Number(input[index])
      } else if (Number(input[index] <= 40)) {
        k2 += Number(input[index])
      } else if (Number(input[index] > 40)) {
        everest += Number(input[index])
      }
    }
  
    percentMusala = musala / totalNumberPeople * 100
    percentMontblan = montblan / totalNumberPeople * 100
    percentKilimandjaro = kilimandjaro / totalNumberPeople * 100
    percentK2 = k2 / totalNumberPeople * 100
    percentEverest = everest / totalNumberPeople * 100
  
    console.log(`${percentMusala.toFixed(2)}%`);
    console.log(`${percentMontblan.toFixed(2)}%`);
    console.log(`${percentKilimandjaro.toFixed(2)}%`);
    console.log(`${percentK2.toFixed(2)}%`);
    console.log(`${percentEverest.toFixed(2)}%`);
  
  }
  
  trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])
  
  
  
  
  