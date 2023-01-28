# 121. Best Time to Buy and Sell Stock

- [Introduction](#introduction)
- [Problem Solution Discussion](#problemDiscussion)
- [Javascript Code](#code)

<a name="introduction"></a>

## Introduction

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

<a name="problemDiscussion"></a>

## Problem Solution Discussion

- The maximum profit will be the difference of the buying price and selling price. But this diference has to be grater than other pairs' differences.

- As the first day price is only can be buying price it can used as the initial buying price. Then we wil compare each day's price with each other using Math.min to find the minimum buying price.

- Another condition is it needs to be boght one day before selling. So the maximum selling price can be calculated from second position of the array,i.e prices[1].

- So, the minprice will be prices[0], maxProfit = 0 and l = prices.length.

- Using a loop from second position to the end of the array we find the minPrice by using Math.min on the current item of the prices and the minPrice.

- Similarly we find the maxprofit by using Math.max upon the maxProfit and the difference of the current minvalue and current item of the prices.

- At last we return the maxprofit.

<a name="code"></a>

## Javascript Code

This is the Javascript solution to return the answer.

```
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0,i=1,minPrice = prices[0], l = prices.length;

    for(i=1;i< l;i++){

     minPrice = Math.min(prices[i], minPrice);
        maxProfit = Math.max(prices[i] - minPrice, maxProfit);

}
return maxProfit;

};

```

N.B: If you want you can do this by sortin the arrays and then compare their value one by one. Also can be done using objects.

- Time complexity O(n).
- Space complexity O(1).

- [Runtime: 88 ms, Beats: 78.77%],[Memory: 51.6 MB, Beats: 76.53%]

Hope you understood the solution.
