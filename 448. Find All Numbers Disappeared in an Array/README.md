# 448. Find All Numbers Disappeared in an Array

- [Introduction](#introduction)
- [Problem Solution Discussion](#problemDiscussion)
- [Javascript Code](#code)

<a name="introduction"></a>

## Introduction

Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Example 1:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Example 2:
Input: nums = [1,1]
Output: [2]

Constraints:

- n == nums.length
- 1 <= n <= 105
- 1 <= nums[i] <= n

<a name="problemDiscussion"></a>

## Problem Solution Discussion

- Create a set to store the numbers that are present in the given array.

- Iterate through the range [1, n] and check if each number is present in the set.

- If a number is not present in the set, add it to the result array.

- Return the result array.

<a name="code"></a>

## Javascript Code

This is the Javascript solution to return the answer.

```
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let existing = new Set(nums);

    let result = []

    for(let i = 1; i<= nums.length ;i ++){
        if(!existing.has(i)){
            result.push(i)
        }
    }

    return result;
};

```

- Time complexity O(n), where n is the length of the input array.
- Space complexity O(n) as used a new Set which can have upto n elements.

- [Runtime: Time: 66 ms, Beats: 70.12%],[Memory: 44.8 MB, Beats: 17.13 %]

N.B : Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space. Which I didn't achieve on my own, so did not add the code. This is a great solution with explanation: https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/1212505/o-n-constant-space-javascript-solution-with-explanation/?orderBy=most_votes&languageTags=javascript

Hope you understood the solution.
