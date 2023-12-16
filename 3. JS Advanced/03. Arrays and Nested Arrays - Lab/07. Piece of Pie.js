function pieceOfPie(pieFlavors, startFlavor, endFlavor) {
    let startIndex = pieFlavors.indexOf(startFlavor);
    let endIndex = pieFlavors.indexOf(endFlavor);
    return pieFlavors.slice(startIndex, endIndex + 1);
}

console.log(pieceOfPie(['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'], 'Key Lime Pie', 'Lemon Meringue Pie'));

