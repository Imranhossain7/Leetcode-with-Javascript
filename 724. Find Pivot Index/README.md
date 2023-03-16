# 724. Find Pivot Index & 1991. Find the Middle Index in Array

- [Introduction](#introduction)
- [Problem Solution Discussion](#problemDiscussion)
- [Javascript Code](#code)

<a name="introduction"></a>

## Introduction

Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
Return the leftmost pivot index. If no such index exists, return -1.

Example 1:
Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11

Example 2:
Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.

Example 3:
Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0

Constraints:

- 1 <= nums.length <= 104
- 1000 <= nums[i] <= 1000

<a name="problemDiscussion"></a>

## Problem Solution Discussion

- The goal is to return the index of the element that satisfies the condition. It has element on the left whose sum is equal to the sum of the elements on it's right.

- First loop through the elements. Take to variable inside the loop to keep the sum of the left and right elements sum. Take another for loop to itrate the elements on the left and calculate their sum. Same goes for another loop for the right elements of the current index.

- If sumLeft and sumRight is equal return the index of the current element.

- If no array element fulfills the conditions return -1.

<a name="code"></a>

## Javascript Code

This is the Javascript solution to return the result.

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let l = nums.length;


    for( let i = 0; i< l;i++){
        let sumLeft = 0;
        let sumRight = 0;
        for(let j = i-1;j >= 0;j--){
            sumLeft+= nums[j]
        }
       for(let k = i+1;k < l;k++){
            sumRight+= nums[k]
        }
      if( sumLeft === sumRight ){
        return i;
       }
    }
    return -1;
};

```

- Time complexity O(n^2) because of a nested for loop.
- Space complexity O(1) as no extra space used.

- [Runtime: 975 ms, Beats: 12.65%],[Memory: 49 MB, Beats: 5.47%]

N.B: This and 1991. Find the Middle Index in Array is the same question.

Hope you understood the solution.
