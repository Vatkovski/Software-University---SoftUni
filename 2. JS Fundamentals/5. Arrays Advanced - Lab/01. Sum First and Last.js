function sumFirstAndLast(nums) {    
    let firstNum = Number(nums[0]);
    let lastNum = Number(nums.pop());
    
    return firstNum + lastNum;
}

console.log(sumFirstAndLast(['20', '30', '40']));