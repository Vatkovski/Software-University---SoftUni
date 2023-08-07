function oddNum(arr) {

    console.log(arr
        .filter((x, i) => i % 2 !== 0)
        .map(x => x * 2)
        .reverse()
        .join(" "))
} 

oddNum([10, 15, 20, 25])