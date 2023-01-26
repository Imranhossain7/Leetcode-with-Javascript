/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let l = nums.length;
  let map = {};
  for (let i = 0; i < l; i++) {
    let current = nums[i];
    let remain = target - current;
    if (map[remain] != undefined) {
      return [map[remain], i];
    } else {
      map[current] = i;
    }
  }
  return [];
};
