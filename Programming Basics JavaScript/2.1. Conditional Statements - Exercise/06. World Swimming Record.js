function demo(input) {
    let worldRecord = Number(input[0]);
    let distance = Number(input[1]);
    let secondsPerMeter = Number(input[2]);
 
    // съпротивлението на водата го забавя на всеки 15 м. с 12.5 секунди
    let waterResistance = Math.floor(distance / 15);
    let waterResistanceSeconds = waterResistance * 12.5;
    let ivansTimeWithoutResistance = distance * secondsPerMeter;
    let ivanTime = ivansTimeWithoutResistance + waterResistanceSeconds;
    let difference = Math.abs(worldRecord - ivanTime);
 
    if (ivanTime < worldRecord) {
        console.log(`Yes, he succeeded! The new world record is ${ivanTime.toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`)
    }
}

demo(["10464", "1500", "20"]) 