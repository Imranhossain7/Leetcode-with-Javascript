/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  var set = new Set(nums);
  if (nums.length !== set.size) return true;
  else return false;
};
