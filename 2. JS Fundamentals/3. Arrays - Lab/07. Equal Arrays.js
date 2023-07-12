function equalArrays(arr1, arr2) {
    let sum = 0;
   for (let i = 0; i < arr1.length; i++) {
    if (Number(arr1[i]) === Number(arr2[i])) {
        sum += Number(arr1[i]);
        if (arr1.length === i+1) {
            console.log(`Arrays are identical. Sum: ${sum}`);
        }
    } else {
        console.log(`Arrays are not identical. Found difference at ${i} index`);
        break;
    }
   }
}

equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);
