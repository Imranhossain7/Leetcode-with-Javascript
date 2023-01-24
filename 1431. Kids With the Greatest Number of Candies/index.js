/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let l = candies.length;
  let ret = [];

  let max = Math.max(...candies);

  for (let j = 0; j < l; j++) {
    if (candies[j] + extraCandies >= max) {
      ret[j] = true;
    } else {
      ret[j] = false;
    }
  }

  return ret;
};
