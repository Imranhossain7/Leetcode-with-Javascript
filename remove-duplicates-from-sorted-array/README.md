# Remove Duplicates from Sorted Array

- [Introduction](#introduction)
- [Problem Solution Discussion](#problemDiscussion)
- [Javascript Code](#code)

<a name="introduction"></a>

## Introduction

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Constraints:

1 <= nums.length <= 3 \* 104
-100 <= nums[i] <= 100
nums is sorted in non-decreasing order.

<a name="problemDiscussion"></a>

## Problem Solution Discussion

- The main constrain is no extra space can be used.So the soultion needs to be in-place solution

- The main target is finding the consecutive duplicate value.The easiest way is to divide it into small parts for compariosn. If we compare two values at a time and find out if there is any duplicate then it would be easier.

- As the first value can't be duplicate we can start from position 1(two in real world!). Then compare it with it's previous valu. If they are not duplicate insert it at starting at second position and after that at the position indicated by the current value of the counting variable which will also return the asked value at last. If they are duplicate ignore and check the next one.

- Inrease the counting variable after one unique element is placed at a new position.

- After the loop is finished return the value of the counting variable for unique values.

<a name="code"></a>

## Javascript Code

This is the Javascript solution to return the answer.

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0; // edge case

  let k = 1; // initialize pointer for unique elements

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i-1]) { // check if current element is different from previous element
      nums[k] = nums[i]; // move current element to position k
      k++; // increment pointer for unique elements
    }
  }

  return k;
}

```

- Time complexity O(n).
- Space complexity O(1).

- [Runtime: 61 ms, Beats: 98.28 %],[Memory: 44.7 MB, Beats: 67.44 %]

Hope you understood the solution.
