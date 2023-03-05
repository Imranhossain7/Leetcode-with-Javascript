/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0; // edge case

  let k = 1; // initialize pointer for unique elements

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i-1]) { // check if current element is different from previous element
      nums[k] = nums[i]; // move current element to position k
      k++; // increment pointer for unique elements
    }
  }

  return k;
}