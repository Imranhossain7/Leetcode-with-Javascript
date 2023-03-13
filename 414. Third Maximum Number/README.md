# 414. Third Maximum Number

- [Introduction](#introduction)
- [Problem Solution Discussion](#problemDiscussion)
- [Javascript Code](#code)

<a name="introduction"></a>

## Introduction

Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

Example 1:
Input: nums = [3,2,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2.
The third distinct maximum is 1.

Example 2:
Input: nums = [1,2]
Output: 2
Explanation:
The first distinct maximum is 2.
The second distinct maximum is 1.
The third distinct maximum does not exist, so the maximum (2) is returned instead.

Example 3:
Input: nums = [2,2,3,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2 (both 2's are counted together since they have the same value).
The third distinct maximum is 1.

Constraints:

- 1 <= nums.length <= 104
- 231 <= nums[i] <= 231 - 1

<a name="problemDiscussion"></a>

## Problem Solution Discussion

- The goal is to find the third distinct maximum number and return it. If there is no third maximum number return the maximum number of the array.

- First we think about eliminating the duplicate value which will make it easy to find the desired element. The better way is to use a Set. Create a Set from the given array so it will have the elements just once. Then create another array from that set and sort the elements of the array.

- After sorting check the lenght of the array. If there is less than 3 elements return the maximum element which is the first element of the sorted array. Else return the third element of the sorted array.

<a name="code"></a>

## Javascript Code

This is the Javascript solution to return the answer.

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {

    const newArr = Array.from(new Set(nums)).sort((a, b) => b - a);

     let l = newArr.length;

    if(l < 3){
        return newArr[0]
    }
    else{
        return newArr[2]
    }
};

```

- Time complexity O(nlogn) because of the sorting of the array.
- Space complexity O(n) as used a new Set.

- [Runtime: Time: 66 ms, Beats: 70.12%],[Memory: 44.8 MB, Beats: 17.13 %]

N.B : The follow up is to obtain a O(n) solution which I didn't achieve on my own, so did not add the code. You can find many in the solution section

Hope you understood the solution.
