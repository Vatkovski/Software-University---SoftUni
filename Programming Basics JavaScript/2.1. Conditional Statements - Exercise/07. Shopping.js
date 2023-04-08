function demo(input) {
    let petersBudget = Number(input[0]);
    let videoCards = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);
    let videoCardPrice = 250;
    let videoCardsTotalPrice = videoCardPrice * videoCards;
    let processorPrice =  videoCardsTotalPrice * 0.35;
    let ramPrice = videoCardsTotalPrice * 0.1;
    let sum = videoCardsTotalPrice + (processors * processorPrice) + (ram * ramPrice);
    let discount = 0.0;
 
    if (videoCards > processors) {
        discount = sum * 0.15;
        sum = sum - discount;
    }
 
    let difference = petersBudget - sum;
    let differenceFormatted = Math.abs(difference).toFixed(2);
 
    if (difference < 0) {
        console.log(`Not enough money! You need ${differenceFormatted} leva more!`)
    } else {
        console.log(`You have ${differenceFormatted} leva left!`)
    }
}

demo(["900", "2", "1", "3"]) 