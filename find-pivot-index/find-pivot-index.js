/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let l = nums.length;
    
    
    for( let i = 0; i< l;i++){
        let sumLeft = 0;
        let sumRight = 0;
        for(let j = i-1;j >= 0;j--){
            sumLeft+= nums[j]
        }
        console.log(sumLeft)
       for(let k = i+1;k < l;k++){
            sumRight+= nums[k]
        }
        console.log(sumRight)
      if( sumLeft === sumRight ){
        return i;
       }
    }
    return -1;
};
