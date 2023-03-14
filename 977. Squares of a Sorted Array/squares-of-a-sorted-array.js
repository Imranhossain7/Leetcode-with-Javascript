var sortedSquares = function (nums) {
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

//Beginner friendly solution

// /**
// Using map function
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var sortedSquares = function(nums) {

//     let arr = [];

//     nums.map(myFunction);

//     function myFunction(value){
//         arr.push(value*value);
//     }

//    let nums2= arr.sort(function(a,b){return(a-b)});
//     return nums2;
// };

/**
 Using array and for loop
 
//  * @param {number[]} nums
//  * @return {number[]}
var sortedSquares = function(nums) {
    var len = nums.length;
    let arr = [];
    for(let i=0;i<len;i++){
        arr.push(nums[i]*nums[i]);
    }
    return arr.sort(function(a,b){return(a-b)});
};
*/
