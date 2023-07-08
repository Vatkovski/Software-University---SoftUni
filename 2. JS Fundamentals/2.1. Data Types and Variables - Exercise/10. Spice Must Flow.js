function spiceMustFlow(startingYield) {
    let spice = 0;
    let workingDays = 0;
    
    while (startingYield >= 100) {
        spice += startingYield;
        spice -= 26;
        startingYield -= 10;
        workingDays++
    }
    if (spice > 26) {
        spice -= 26;    
    }
    console.log(workingDays);
    console.log(spice);
}

spiceMustFlow(450);