# Find Numbers with Even Number of Digits

- [Introduction](#introduction)
- [Problem Solution Discussion](#problemDiscussion)
- [Javascript Code](#code)

<a name="introduction"></a>

## Introduction

Given an array nums of integers, return how many of them contain an even number of digits.

Example 1:

Input: nums = [12,345,2,6,7896]
Output: 2
Explanation:
12 contains 2 digits (even number of digits).
345 contains 3 digits (odd number of digits).
2 contains 1 digit (odd number of digits).
6 contains 1 digit (odd number of digits).
7896 contains 4 digits (even number of digits).
Therefore only 12 and 7896 contain an even number of digits.

Example 2:

Input: nums = [555,901,482,1771]
Output: 1
Explanation:
Only 1771 contains an even number of digits.

Constraints:

1 <= nums.length <= 500
1 <= nums[i] <= 105
<a name="problemDiscussion"></a>

## Problem Solution Discussion

- The goal is to return how many numbers in the nums array have even number of digit.

- This can be done in number of ways. We'll use forEach to loop through each item and them convert them to string using toString() method.

- toString() will return each elements as an string. If is has even number of digits the length of the string will be even also

- After converting to string check the length by dividing it by 2 to see if it's even. If it's even increase the count variable. If not check the next one.

- At last return the value of count which is how many numbers have even digits.

<a name="code"></a>

## Javascript Code

This is the Javascript solution to return the result.

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let count = 0;

  nums.forEach((item) => {
    let str = item.toString();
    if (str.length % 2 == 0) {
      count++;
    }
  });
  return count;
};


```

- [Runtime: 54 ms, Beats: 96.96 %],[Memory: 42.4 MB, Beats: 86.57 %]

Hope you understood the solution.
