function timeToWalk(steps, footprintLength, speedKmH) {
    let distanceMeters = steps * footprintLength;
    let speedMetersSec = speedKmH * 1000 / 3600;
    let timeSeconds = Math.round(distanceMeters / speedMetersSec);
    let restMinutes = Math.floor(distanceMeters / 500);
    timeSeconds += restMinutes * 60;

    let seconds = timeSeconds % 60;
    let minutes = ((timeSeconds - seconds) / 60) % 60;
    let hours = (timeSeconds - minutes * 60 - seconds) / 3600;

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

    function pad(num) {
        if (num < 10) {
            return '0' + num;
        } else {
            return '' + num;
        }
    }
}

console.log(timeToWalk(4000, 0.60, 5)); 
console.log(timeToWalk(2564, 0.70, 5.5)); 
