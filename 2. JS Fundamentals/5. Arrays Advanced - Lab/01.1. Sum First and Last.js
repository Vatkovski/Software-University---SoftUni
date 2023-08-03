function sumFirstAndLast(nums) {    
    return Number(nums.shift()) + Number(nums.pop());
}

console.log(sumFirstAndLast(['20', '30', '40']));