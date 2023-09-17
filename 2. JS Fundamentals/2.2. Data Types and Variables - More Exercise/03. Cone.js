function calculateConeProperties(radius, height) {
    let volume = (1/3) * Math.PI * Math.pow(radius, 2) * height;
    let slantHeight = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
    let area = Math.PI * radius * (radius + slantHeight);

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}

// Example usage:
calculateConeProperties(3, 5); // volume = 47.1239, area = 83.2298
calculateConeProperties(3.3, 7.8); // volume = 88.9511, area = 122.0159
