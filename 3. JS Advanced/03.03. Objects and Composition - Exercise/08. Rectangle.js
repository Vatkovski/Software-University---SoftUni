function rectangle(width, height, color) {
    return {
        width: width,
        height: height,
        color: color.charAt(0).toUpperCase() + color.slice(1),
        calcArea: function() {
            return this.width * this.height;
        }
    };
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);  // Outputs: 4
console.log(rect.height); // Outputs: 5
console.log(rect.color);  // Outputs: Red
console.log(rect.calcArea()); // Outputs: 20
