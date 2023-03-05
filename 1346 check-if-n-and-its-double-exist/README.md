# Check If N and Its Double Exist

- [Introduction](#introduction)
- [Problem Solution Discussion](#problemDiscussion)
- [Javascript Code](#code)

<a name="introduction"></a>

## Introduction

Given an array arr of integers, check if there exist two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 \* arr[j]

Example 1:

Input: arr = [10,2,5,3]
Output: true
Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 _ 5 == 2 _ arr[j]

Example 2:

Input: arr = [3,1,7,11]
Output: false
Explanation: There is no i and j that satisfy the conditions.

Constraints:

- 2 <= arr.length <= 500
- 103 <= arr[i] <= 103

<a name="problemDiscussion"></a>

## Problem Solution Discussion

- Take two for loop , outer one lopping through each elements and inner one looping through each element for invidual element of the outer loop.

- Check the conditions of i!== j and arr[i] === 2\*arr[j]

- Return true if any element satisfies both conditions.

- Return false otherwise.

<a name="code"></a>

## Javascript Code

This is the Javascript solution to return the answer.

```
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let l = arr.length;

    for(let i = 0;i< l;i++){
        for(let j =0;j<l; j ++){
            if( i !== j && arr[i] === 2*arr[j])
                return true;
        }
    }
    return false;
};
```

N.B: Another solution is using Binary search. First sort the elements, apply Binary search .

- Time complexity O(n^2).
- Space complexity O(1).

- [Runtime: 61 ms, Beats: 98.28 %],[Memory: 44.7 MB, Beats: 67.44 %]

Hope you understood the solution.
