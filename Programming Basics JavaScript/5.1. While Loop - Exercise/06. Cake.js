function cake(input) {

    let length = Number(input[0]);
    let width = Number(input[1]);
    let cakePieces = length * width;
    let i = 2;

    while (true) {
        if (input[i] != "STOP") {
            cakePieces -= Number(input[i]);
        }

        if (cakePieces < 0 ) {
            console.log(`No more cake left! You need ${Math.abs(cakePieces)} pieces more.`);
            break;
        }
        
        if (input[i] === "STOP") {
            console.log(`${cakePieces} pieces are left.`);
            break;
        }

        i++
    }

}

cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])

