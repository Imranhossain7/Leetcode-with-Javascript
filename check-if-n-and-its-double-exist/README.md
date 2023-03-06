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

- The basic solution is done using brute force

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
- Time complexity O(n^2).
- Space complexity O(1).

- [Runtime: 61 ms, Beats: 98.28 %],[Memory: 44.7 MB, Beats: 67.44 %]


N.B: Another solution is using Binary search. First sort the elements, apply Binary search .

<a name="code"></a>

## Solve with Biinary search after sorting

This is the Javascript solution to return the answer.

```
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    arr.sort((a,b) => (a-b));
    
    for (let i=0; i< arr.length;i++){
        let low = 0 ,high = arr.length - 1;
        
        while( low <= high) {
            let mid = Math.floor((low+high)/2);
            
            if ( (arr[mid] === arr[i] *2) && mid !== i){
                return true
            }
            else if (arr[mid]< arr[i] *2){
                low = mid + 1;
            }
            else{
                high = mid - 1;
            }
        }
    }
    return false
};
```
- The time complexity of this code is O(n log n), where n is the length of the input array. This is because of the sort method, which takes O(n log n) time to sort the array, and the binary search algorithm, which takes O(log n) time to search for each element. Since we perform binary search for each element in the array, the total time complexity of the algorithm is O(n log n).

- The space complexity of this code is O(1), since we are only using a few constant variables for the loop and binary search. The input array is sorted in-place and does not require any extra memory. Therefore, the space complexity is constant and does not depend on the size of the input.


- [Runtime: 73 ms, Beats: 40.21 %],[Memory: 44.4 MB, Beats: 22.35 %]


Hope you understood both of the solutions.
