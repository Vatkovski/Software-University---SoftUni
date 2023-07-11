function sumEvenNumbers(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num%2==0) {
            sum+=Number(num)
        } 
    }
    console.log(sum);
}

sumEvenNumbers(['2','4','6','8','10']);