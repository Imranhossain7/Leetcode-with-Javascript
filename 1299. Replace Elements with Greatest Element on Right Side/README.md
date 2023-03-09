# 1299. Replace Elements with Greatest Element on Right Side

- [Introduction](#introduction)
- [Problem Solution Discussion](#problemDiscussion)
- [Javascript Code](#code)

<a name="introduction"></a>

## Introduction

Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.After doing so, return the array.

Example 1:

Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
Explanation:

- index 0 --> the greatest element to the right of index 0 is index 1 (18).
- index 1 --> the greatest element to the right of index 1 is index 4 (6).
- index 2 --> the greatest element to the right of index 2 is index 4 (6).
- index 3 --> the greatest element to the right of index 3 is index 4 (6).
- index 4 --> the greatest element to the right of index 4 is index 5 (1).
- index 5 --> there are no elements to the right of index 5, so we put -1.

Example 2:

Input: arr = [400]
Output: [-1]
Explanation: There are no elements to the right of index 0.

Constraints:

- 1 <= arr.length <= 104
- 1 <= arr[i] <= 105

<a name="problemDiscussion"></a>

## Problem Solution Discussion

- we iterate through the array from right to left, keeping track of the maximum element encountered so far. At each iteration, we update the current element with the maximum element encountered so far and update the maximum element if necessary.

- The starting point would be the position that is one less than the length of the array. We keep it's value in a temp variable. Set max to -1 as there is no right side element of the last element. Assign the value of max to the ith element of the array.

- Calculate new value of max using Math.max so max has the maximum value of the elements traversed from right till now.

- Repeat this process for each element and return the array after the loop ends.

<a name="code"></a>

## Javascript Code

This is the Javascript solution to return the answer.

```
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let l = arr.length;
    let max = -1;

    for(let i = l-1; i>=0; i--){
        let temp = arr[i];
        arr[i] = max;
        max = Math.max(max, temp);
    }
    return arr;
};

```

- Time complexity O(n).
- Space complexity O(1).

- [Runtime: Time:184 ms, Beats: 69.03 %],[Memory: 51.6 MB, Beats: 27.20 %]

- N.B: This can be solved using binary search but the time complexity will increase.

Hope you understood the solution.
