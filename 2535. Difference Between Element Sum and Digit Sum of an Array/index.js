/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
  const allDigits = nums.join("").split("");
  let normalSum = 0;
  let digitSum = 0;
  nums.forEach((x) => (normalSum += x));
  allDigits.forEach((x) => (digitSum += parseInt(x)));
  const diff = Math.abs(normalSum - digitSum);
  return diff;
};
