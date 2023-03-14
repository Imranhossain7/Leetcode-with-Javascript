/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let existing = new Set(nums);
    
    let result = []
    
    for(let i = 1; i<= nums.length ;i ++){
        if(!existing.has(i)){
            result.push(i)
        }
    }
    
    return result;

};