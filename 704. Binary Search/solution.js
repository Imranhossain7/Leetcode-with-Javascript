// O(logn) solution

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = nums.length;
  let start = 0;
  let end = l - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (nums[middle] == target) {
      return middle;
    } else if (nums[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
};

//easy solution using built in function

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  return nums.indexOf(target);
};
