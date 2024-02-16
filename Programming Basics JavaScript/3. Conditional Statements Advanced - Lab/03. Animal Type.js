function animalClass(animalNameArray) {
    let animalName = animalNameArray[0];
    switch (animalName) {
        case "dog":
            return "mammal";
        case "crocodile":
            return "reptile";
        case "tortoise":
            return "reptile";
        case "snake":
            return "reptile";
        default:
            return "unknown";
    }
}

console.log(animalClass(["dog"]));
console.log(animalClass(["snake"]));
console.log(animalClass(["cat"])); 
