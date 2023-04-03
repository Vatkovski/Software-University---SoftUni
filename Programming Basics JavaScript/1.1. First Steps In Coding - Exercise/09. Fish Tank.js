function demo(input) {
 
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);
 
    let aquariumVolume = length * width * height;
    let volumeLiters = aquariumVolume * 0.001;
    let usedSpace = percent / 100;
    let aquariumLiters = volumeLiters * (1 - usedSpace);

    console.log(aquariumLiters);

}

demo(["85 ",

"75 ",

"47 ",

"17 "]);