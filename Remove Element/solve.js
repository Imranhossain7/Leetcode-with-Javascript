/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    var pos = 0;
    
    for(let i = 0;i<nums.length;i++){
        if(nums[i] !== val){
          nums[pos]   = nums[i];
            pos++;
        }
    }
   return pos;
};

//With pointers

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    var start =0;
     var end = nums.length-1;
     
     while (left <= right){
         if(nums[start] === val) {
             nums[start] = nums [end];
             end-- ;
         }
         else{
             start++;
         }
     }
      return start;
 }



	