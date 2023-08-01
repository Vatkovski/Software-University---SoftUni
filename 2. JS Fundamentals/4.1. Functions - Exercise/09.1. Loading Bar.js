function loadingBar(percentNumber) {
    let buff = percentNumber / 10;
    switch (buff) {
        case 0:
            console.log("0% [..........]");
            console.log("Still loading...");
            break;
        case 1:
            console.log("10% [%.........]");
            console.log("Still loading...");
            break;
        case 2:
            console.log("20% [%%........]");
            console.log("Still loading...");
            break;
        case 3:
            console.log("30% [%%%.......]");
            console.log("Still loading...");
            break;
        case 4:
            console.log("40% [%%%%......]");
            console.log("Still loading...");
            break;
        case 5:
            console.log("50% [%%%%%.....]");
            console.log("Still loading...");
            break;
        case 6:
            console.log("60% [%%%%%%....]");
            console.log("Still loading...");
            break;
        case 7:
            console.log("70% [%%%%%%%...]");
            console.log("Still loading...");
            break;
        case 8:
            console.log("80% [%%%%%%%%..]");
            console.log("Still loading...");
            break;
        case 9:
            console.log("90% [%%%%%%%%%.]");
            console.log("Still loading...");
            break;
        case 10:
            console.log("100% Complete!");
            console.log("[%%%%%%%%%%]");
            break;
        default:
            break;
    }
}

loadingBar(100);