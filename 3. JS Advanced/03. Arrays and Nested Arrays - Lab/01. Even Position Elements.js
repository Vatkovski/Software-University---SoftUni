function evenPositionElements(arr) {
    let result = arr.filter((element, index) => index % 2 === 0);
    return result.join(" ");
}


console.log(evenPositionElements(['20', '30', '40', '50', '60'])); 
// console.log(evenPositionElements(['5', '10']));
