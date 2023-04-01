# 2529. Maximum Count of Positive Integer and Negative Integer

- [Introduction](#introduction)
- [Problem Solution Discussion](#problemDiscussion)
- [Javascript Code](#code)

<a name="introduction"></a>

## Introduction

Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
Note that 0 is neither positive nor negative.

Example 1:
Input: nums = [-2,-1,-1,1,2,3]
Output: 3
Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.

Example 2:
Input: nums = [-3,-2,-1,0,0,1,2]
Output: 3
Explanation: There are 2 positive integers and 3 negative integers. The maximum count among them is 3.

Example 3:
Input: nums = [5,20,66,1314]
Output: 4
Explanation: There are 4 positive integers and 0 negative integers. The maximum count among them is 4.

Constraints:

- 1 <= nums.length <= 2000
- 2000 <= nums[i] <= 2000
- nums is sorted in a non-decreasing order.

<a name="problemDiscussion"></a>

## Problem Solution Discussion

- This is an easy problem. Using a for loop we iterate through the array and check if the value is greater than zero or less than zero. If greater than increase value of pos by one. If less than zero increase value of neg by one. At last return the maximum value between pos and neg.

- There is a follow up to solve it in O(log n) time. Which is acheiveable usingg binary search for both pos and neg value.

<a name="code"></a>

## Javascript Code

This is the Javascript solution to return the result(string).

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  let l = nums.length;
  let pos = 0;
  let neg = 0;

  for (let i = 0; i < l; i++) {
    if (nums[i] > 0) {
      pos++;
    } else if (nums[i] < 0) {
      neg++;
    }
  }

  return Math.max(pos, neg);
};

```

- Time complexicity of O(n) for the for loop and space complexicity on O(1) as no new space used.

- [Runtime: 62 ms, Beats: 78.7%],[Memory: 44.9 MB, Beats: 10.25%]

Hope you understood the solution.
