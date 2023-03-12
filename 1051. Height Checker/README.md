# 1051. Height Checker

- [Introduction](#introduction)
- [Problem Solution Discussion](#problemDiscussion)
- [Javascript Code](#code)

<a name="introduction"></a>

## Introduction

A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).

Return the number of indices where heights[i] != expected[i].

Example 1:
Input: heights = [1,1,4,2,1,3]
Output: 3
Explanation:
heights: [1,1,4,2,1,3]
expected: [1,1,1,2,3,4]
Indices 2, 4, and 5 do not match.

Example 2:
Input: heights = [5,1,2,3,4]
Output: 5
Explanation:
heights: [5,1,2,3,4]
expected: [1,2,3,4,5]
All indices do not match.

Example 3:
Input: heights = [1,2,3,4,5]
Output: 0
Explanation:
heights: [1,2,3,4,5]
expected: [1,2,3,4,5]
All indices match.

Constraints:

- 1 <= heights.length <= 100
- 1 <= heights[i] <= 100

<a name="problemDiscussion"></a>

## Problem Solution Discussion

- The task is to find out how many elements are out of place when the heights are sorted. We find that by comparing the given array with it's sorted version.

- We take another array and using the spread operator keep of copy of the original arrayt and then sort it. We take a count variable to keep count of our of position elements.

- Using a for loop we compare each elements in the same position of the both arrays. If they are not equal increase the value of count by 1.

- Return the count variable after completing the for loop.

<a name="code"></a>

## Javascript Code

This is the Javascript solution to return the count.

```
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let count = 0;

   let sortedHeight = [...heights].sort((a,b) => (a-b));

    for( let i =0; i< heights.length;i++){
        if(heights[i] !== sortedHeight[i]){
            count++;
        }
    }
    return count;
};

```

- The time complexity of this solution is O(n log n) due to the sorting operation using .sort().
- The space complexity is O(n) because a copy of the heights array is created using the spread operator.

- [Runtime: Time:51 ms, Beats: 98.02 %],[Memory: 42.4 MB, Beats: 27.62 %]

Hope you understood the solution.
