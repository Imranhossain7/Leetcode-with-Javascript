/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let sortedNums = [...nums].sort((a,b) => b-a);
    
    for(let i=0; i<nums.length;i++){
        if(nums[i] !== sortedNums[0] &&  nums[i]*2 > sortedNums[0]) {
     return -1;   
    }
    }
    return  nums.indexOf(sortedNums[0]); 
    
};