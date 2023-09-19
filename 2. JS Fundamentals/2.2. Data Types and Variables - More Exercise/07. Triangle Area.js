function calculateTriangleArea(a, b, c) {
    // calculate the semi-perimeter
    let s = (a + b + c) / 2;

    // calculate the area
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    // print the area to the console
    console.log(area);
}

// test the function with your examples
calculateTriangleArea(2, 3.5, 4);  // Output: 3.4994419197923547
calculateTriangleArea(3, 5.5, 4);  // Output: 5.854685623498498
