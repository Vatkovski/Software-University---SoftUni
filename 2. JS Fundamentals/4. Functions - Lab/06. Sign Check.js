function signCheck (first, second, third) {
    let arr = [first, second, third];
    let posCount = 0;

        for (let i = 0; i < 3; i++) {
            if(arr[i] > 0) {
                posCount++;
            }
        } 

        return posCount === 3 || posCount === 1 ? 'Positive' : 'Negative';
}
console.log(signCheck(5,
    -12,
   -15
   ));