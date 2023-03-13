/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    
    const newArr = Array.from(new Set(nums)).sort((a, b) => b - a);
    
     let l = newArr.length;
    
    if(l < 3){
        return newArr[0]
    }
    else{
        return newArr[2]
    }
  
};