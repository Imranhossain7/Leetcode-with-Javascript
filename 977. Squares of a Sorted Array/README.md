# 977. Squares of a Sorted Array

- [Introduction](#introduction)
- [Problem Solution Discussion](#problemDiscussion)
- [Javascript Code](#code)

<a name="introduction"></a>

## Introduction

Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

Example 1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

Constraints:

- 1 <= nums.length <= 104
- 104 <= nums[i] <= 104
- nums is sorted in non-decreasing order.

<a name="problemDiscussion"></a>

## Problem Solution Discussion

- This can easily be solved by iterating over the elements and squaring them. Then apply sort() to return the sorted result. It can be sorted before ans squared also.The time complexity would be O(nlogN) because of sorting. But in the solution tried to achieve an O(n) solution.

- An O(n) solution can be achieved using a two-pointer approach. We can use two pointers, one pointing to the beginning of the array and the other pointing to the end of the array. We compare the absolute values of the elements at these pointers and insert the larger absolute value squared into a new array.

- We then move the pointer corresponding to the larger absolute value towards the center of the array. We repeat this process until the two pointers cross each other.

- Return the result array.

<a name="code"></a>

## Javascript Code

This is the Javascript solution to return the answer.

```
var sortedSquares = function (nums) {
  const n = nums.length;
  const result = new Array(n);
  let left = 0;
  let right = n - 1;
  let i = n - 1;

  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[i] = nums[left] ** 2;
      left++;
    } else {
      result[i] = nums[right] ** 2;
      right--;
    }
    i--;
  }

  return result;
};

```

- Time complexity O(n), where n is the length of the input array.
- Space complexity O(n) as used a new array with n elements.

- [Runtime: Time: 98 ms, Beats: 87.29 % ],[Memory: 48.9 MB, Beats: 22.60 %]

N.B : Solution of the first approach with sort() is given in the JS file.

Hope you understood the solution.
