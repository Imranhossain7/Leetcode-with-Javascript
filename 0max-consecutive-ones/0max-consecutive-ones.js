/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max =0 , currentMax = 0;
    let l = nums.length;
    
    for(let i=0;i<l;i++){
        if(nums[i] === 1){
            currentMax++;
            if(currentMax > max){
                max = currentMax 
            }
        }
        else {
            currentMax = 0;
        }
    }
    return max;
};