/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    
 let l = nums.length;
 let pos = 0;
 for(let i = 0; i< l;i++){
     if(nums[i] % 2 === 0){
         [nums[pos],nums[i]] = [nums[i],nums[pos]]
         pos++
     }
 }

    return nums
    
};