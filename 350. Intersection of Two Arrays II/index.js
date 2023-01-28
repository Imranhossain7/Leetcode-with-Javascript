/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let map = new Map();
  let result = [];

  for (let i of nums1) {
    map.has(i) ? map.set(i, map.get(i) + 1) : map.set(i, 1);
  }

  for (i of nums2) {
    map.has(i) && map.get(i) > 0
      ? result.push(i) && map.set(i, map.get(i) - 1)
      : false;
  }

  return result;
};
