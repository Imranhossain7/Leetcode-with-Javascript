/**
Using map function
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    
    let arr = [];
    
    nums.map(myFunction);
    
    function myFunction(value){
        arr.push(value*value);
    }
    
   let nums2= arr.sort(function(a,b){return(a-b)});
    return nums2;
};


 /**
 Using array and for loop
 
 * @param {number[]} nums
 * @return {number[]}
var sortedSquares = function(nums) {
    var len = nums.length;
    let arr = [];
    for(let i=0;i<len;i++){
        arr.push(nums[i]*nums[i]);
    }
    return arr.sort(function(a,b){return(a-b)});
};
*/