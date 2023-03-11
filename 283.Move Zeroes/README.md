# 283. Move Zeroes

- [Introduction](#introduction)
- [Problem Solution Discussion](#problemDiscussion)
- [Javascript Code](#code)

<a name="introduction"></a>

## Introduction

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]

Constraints:

- 1 <= nums.length <= 104
- 231 <= nums[i] <= 231 - 1

<a name="problemDiscussion"></a>

## Problem Solution Discussion

- The main task is to use in place technique and place the zeros at the end of the array.

- We use the two pointers technique.First take a pointer to track the position where non-zero elements will be placed. The using another pointer at the start of the array iterate through the array to find non-zero element and place them in correct position using the pointer.

- The value of the pointer is increased when a new non -zero element is found. The other loop stops when the end of the array is reached

- Return the modified array.

<a name="code"></a>

## Javascript Code

This is the Javascript solution to return the answer.

```
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
 let l = nums.length;
 let pos = 0;
 for(let i = 0; i< l;i++){
     if(nums[i] !== 0){
         [nums[pos],nums[i]] = [nums[i],nums[pos]]
         pos++
     }
 }
    return nums

};

```

- Time complexity O(n).
- Space complexity O(1).

- [Runtime: Time:92 ms, Beats: 70.82 %],[Memory: 46.6 MB, Beats: 61.58 %]

Hope you understood the solution.
