function loadingBar(num) {
    let percentage = num;
    let bar = '';
    for (let i = 0; i < 10; i++) {
        if (i < percentage / 10) {
            bar += '%';
        } else {
            bar += '.';
        }
    }
    if (percentage === 100) {
        console.log(`${percentage}% Complete!`);
        console.log(`[${bar}]`);
    } else {
        console.log(`${percentage}% [${bar}]`);
        console.log('Still loading...');
    }
}


loadingBar(100);