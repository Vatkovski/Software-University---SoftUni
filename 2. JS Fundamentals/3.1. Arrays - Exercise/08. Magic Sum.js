function magicSum(array, num) {
    for (let i = 0; i < array.length; i++) {
         for (let j = i + 1; j < array.length; j++) {
             if (array[i] + array[j] === num) {
                 console.log(array[i], array[j]);
                }            
         }    
    } 
 }
 
 magicSum([1, 7, 6, 2, 19, 23], 8);