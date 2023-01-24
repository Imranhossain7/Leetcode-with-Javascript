/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let ret = [];

  let max = Math.max(...candies);
  candies.map((item) =>
    item + extraCandies >= max ? ret.push(true) : ret.push(false)
  );

  return ret;
};
