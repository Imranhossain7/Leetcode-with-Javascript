var sortedSquares = function(nums) {
    const n = nums.length;
    const result = new Array(n);
    let left = 0;
    let right = n - 1;
    let i = n - 1;
    
    while (left <= right) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            result[i] = nums[left] ** 2;
            left++;
        } else {
            result[i] = nums[right] ** 2;
            right--;
        }
        i--;
    }
    
    return result;
};
