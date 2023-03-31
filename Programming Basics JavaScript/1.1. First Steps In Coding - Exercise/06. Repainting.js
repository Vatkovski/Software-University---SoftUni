function demo(input) {
 
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let workingHours = Number(input[3]);
 
    let nylonTotalSum = (nylon + 2) * 1.50;
    let paintTotalSum = (paint * 1.10) * 14.50;
    let thinnerTotalSum = thinner * 5;
    let bagsPrice = 0.40;
 
    let totalSumForMaterials = nylonTotalSum + paintTotalSum + thinnerTotalSum + bagsPrice;
    let totalSumForWorkers = (totalSumForMaterials * 0.30) * workingHours;
 
    let finalSum = totalSumForMaterials + totalSumForWorkers;
    console.log(finalSum);
 
}

demo(["10 ",

"11 ",

"4 ",

"8 "]);