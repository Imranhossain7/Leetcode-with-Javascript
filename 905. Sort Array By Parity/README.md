# 905. Sort Array By Parity

- [Introduction](#introduction)
- [Problem Solution Discussion](#problemDiscussion)
- [Javascript Code](#code)

<a name="introduction"></a>

## Introduction

Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers. Return any array that satisfies this condition.

Example 1:

Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

Example 2:

Input: nums = [0]
Output: [0]

Constraints:

- 1 <= nums.length <= 5000
- 0 <= nums[i] <= 5000

<a name="problemDiscussion"></a>

## Problem Solution Discussion

- The main task is to place the even numbers at first and the odd numbers after them. We'll try to do this withoiut taking any extra space for the operation.

- We use the two pointers technique.First take a pointer to track the position where even elements will be placed. The using another pointer at the start of the array iterate through the array to find even element and place them in correct position using the pointer.

- The value of the pointer is increased when a new even element is found. The other loop stops when the end of the array is reached

- Return the modified array.

<a name="code"></a>

## Javascript Code

This is the Javascript solution to return the answer.

```
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {

 let l = nums.length;
 let pos = 0;
 for(let i = 0; i< l;i++){
     if(nums[i] % 2 === 0){
         [nums[pos],nums[i]] = [nums[i],nums[pos]]
         pos++
     }
 }
    return nums;
};

```

- Time complexity O(n).
- Space complexity O(1).

- [Runtime: Time:69 ms, Beats: 95.09 %],[Memory: 44.7 MB, Beats: 53.23 %]

Hope you understood the solution.
