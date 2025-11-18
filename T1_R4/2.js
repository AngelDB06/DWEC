function addOnlyNums(nums) {
    let suma=0;
    for (let i = 0; i < nums.length; i++) {
        if (!isNaN(nums[i])) {
            suma+=nums[i]
        }
    }
    return suma
}