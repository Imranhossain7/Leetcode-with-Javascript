/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let existing = new Set(nums);

  let result = [];

  for (let i = 1; i <= nums.length; i++) {
    if (!existing.has(i)) {
      result.push(i);
    }
  }

  return result;
};

// without extra space and in O(n) runtime

var findDisappearedNumbers = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) {
      nums[index] = -nums[index];
    }
  }
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }
  return result;
};
