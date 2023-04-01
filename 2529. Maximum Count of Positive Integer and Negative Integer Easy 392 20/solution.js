/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  let l = nums.length;
  let pos = 0;
  let neg = 0;

  for (let i = 0; i < l; i++) {
    if (nums[i] > 0) {
      pos++;
    } else if (nums[i] < 0) {
      neg++;
    }
  }

  return Math.max(pos, neg);
};
