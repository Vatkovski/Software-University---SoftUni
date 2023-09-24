function validatePoints(input) {
    let [x1, y1, x2, y2] = input;

    function calculateDistance(x1, y1, x2, y2) {
        let dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return Number.isInteger(dist);
    }

    function validate(x1, y1, x2, y2) {
        return calculateDistance(x1, y1, x2, y2) ? 'valid' : 'invalid';
    }

    console.log(`{${x1}, ${y1}} to {0, 0} is ${validate(x1, y1, 0, 0)}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${validate(x2, y2, 0, 0)}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${validate(x1, y1, x2, y2)}`);
}

validatePoints([3, 0, 0, 4]);
validatePoints([2, 1, 1, 1]);
