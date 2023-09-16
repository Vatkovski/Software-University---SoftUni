function calculateDistance(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}

let distance = calculateDistance(2, 4, 5, 0);
console.log(distance); // Output: 5

distance = calculateDistance(2.34, 15.66, -13.55, -2.9985);
console.log(distance); // Output: 24.50778901186315
