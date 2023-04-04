function demo(input) {
    let hour = Number(input[0]); 
    let minutes = Number(input[1]);
    let minutesPlus15 = minutes + 15;
 
    if (minutesPlus15 >= 60) {
        // hour = hour + 1;
        hour += 1;
        // minutesPlus15 = minutesPlus15 - 60;
        minutesPlus15 -= 60;
    }
 
    if (hour === 24) {
        hour = 0;
    }
 
    if (minutesPlus15 < 10) {
        console.log(`${hour}:0${minutesPlus15}`);
    } else {
        console.log(`${hour}:${minutesPlus15}`);
    }
}

demo(["1", "46"]);