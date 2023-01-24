/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  let target = [];

  let m = index.length;

  for (let i = 0; i < m; i++) {
    target.splice(index[i], 0, nums[i]);
  }
  return target;
};
