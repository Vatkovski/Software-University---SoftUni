function roadRadar(speed, area) {
    let limits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    };

    let limit = limits[area];

    if (speed <= limit) {
        return `Driving ${speed} km/h in a ${limit} zone`;
    } else {
        let difference = speed - limit;
        let status;

        if (difference <= 20) {
            status = 'speeding';
        } else if (difference <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }

        return `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`;
    }
}

console.log(roadRadar(40, 'city')); 
console.log(roadRadar(21, 'residential'));
console.log(roadRadar(120, 'interstate'));
console.log(roadRadar(200, 'motorway')); 
