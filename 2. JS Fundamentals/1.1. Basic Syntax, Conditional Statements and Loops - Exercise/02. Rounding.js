function rounding(numberToBeRounded, precision) {
    
    if (precision > 15) {
        precision = 15;
        }
    console.log(parseFloat (numberToBeRounded.toFixed(precision)));    
}
rounding(10.5,3);
