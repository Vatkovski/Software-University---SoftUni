function building(input) {
    let totalFloors = Number(input[0]);
    let totalRooms = Number(input[1]);

    for (let floor = totalFloors; floor >= 1; floor--) {
        let result = "";
        for (let room = 0; room < totalRooms; room++) {
            if (floor === totalFloors) {
                result += `L${floor}${room} `;
            } else if (floor % 2 === 0) {
                result += `O${floor}${room} `;
            } else {
                result += `A${floor}${room} `;
            }
        }
        console.log(result);
    }
}


building(["6", "4"])








