/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  let l = nums.length;
  let arr = [];
  for (let i = 0; i < l; i++) {
    arr.push(nums[nums[i]]);
  }
  return arr;
};
