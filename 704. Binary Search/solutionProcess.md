# 704. Binary Search

- [Introduction](#introduction)
- [Problem Solution Discussion](#problemDiscussion)
- [Javascript Code](#code)

<a name="introduction"></a>

## Introduction

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

Constraints:

- 1 <= nums.length <= 104
- 104 < nums[i], target < 104
- All the integers in nums are unique.
- nums is sorted in ascending order.

<a name="problemDiscussion"></a>

## Problem Solution Discussion

- Thi problem needs to be solved using binary search as the question tate to use an algorithm with O(logn) runtime complexicity.

- We start with start at 0 position and end at length -1 position. Then while start < end calculate middle position using Math.floor on ((start+end)/2).

- If the middle positioned element of the array is target then retuen the value of middle.

- If middle positioned element is less than the target value then update start to middle +1. Else update end to middle -1.

- This why we continue the search until start and end reach the condition in while loop.

- Return -1 if the target is not found.

<a name="code"></a>

## Javascript Code

This is the Javascript solution to return the result using an O(log n) alorithm.

```
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

```

- Time complexity of O(log n), as the size of the search interval is halved at each iteration. Space complexicity is O(1) as no new space is used.

- [Runtime: 64 ms, Beats: 68.1%],[Memory: 45.4 MB, Beats: 19.42%]

- You can find the solution usin built in indexOf function in the solution.js file.

Hope you understood the solution.
