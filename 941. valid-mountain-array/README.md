# Valid Mountain Array

- [Introduction](#introduction)
- [Problem Solution Discussion](#problemDiscussion)
- [Javascript Code](#code)

<a name="introduction"></a>

## Introduction

Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

- arr.length >= 3
- There exists some i with 0 < i < arr.length - 1 such that:
- arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
- arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

Example 1:
Input: arr = [2,1]
Output: false

Example 2:
Input: arr = [3,5,5]
Output: false

Example 3:
Input: arr = [0,3,2,1]
Output: true

Constraints:

- 1 <= arr.length <= 104
- 0 <= arr[i] <= 104

<a name="problemDiscussion"></a>

## Problem Solution Discussion

- The idea is to start at the beginning of the array and walk up the mountain until we reach the peak (the highest point). Then, we walk down the mountain and make sure that the sequence of numbers is decreasing. Finally, we check that we have reached the end of the array.

- The given problem can be solved with a linear scan approach where we traverse the array from left to right until we find the peak element of the mountain, i.e., the element where the values start decreasing. If we do not find such an element, then the array is not a mountain array.

- Once we find the peak element, we continue traversing the array from the peak element until the end of the array to ensure that the values are decreasing. If any value is found to be increasing or equal to the previous value, then the array is not a mountain array.

- We will track this traversing using a variable and increasing it's value as we move forward.If the value of that variable is equal to the length of the array-1 return true.We found a mountain array.

<a name="code"></a>

## Javascript Code

This is the Javascript solution to return the answer.

```
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let l = arr.length;

    if(l<3){
        return false;
    }

    let i =0;

    while( i< l && arr[i+1] > arr[i]){
        i++
    }

    if( i === 0 || i === arr.length-1){
        return false;
    }

    while( i < l && arr[i+1] < arr[i]){
        i++
    }

    return i == arr.length -1;

};

```

- Time complexity O(n).
- Space complexity O(1).

- [Runtime: Time:73 ms, Beats: 51.87 %],[Memory: 45.3 MB, Beats: 7.07 %]

- N.B: This can be solved using binary search but the time complexity will increase.

Hope you understood the solution.
