/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0,
    i = 1,
    minPrice = prices[0],
    l = prices.length;

  for (i = 1; i < l; i++) {
    minPrice = Math.min(prices[i], minPrice);
    maxProfit = Math.max(prices[i] - minPrice, maxProfit);
  }
  return maxProfit;
};
