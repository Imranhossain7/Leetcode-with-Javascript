# 350. Intersection of Two Arrays II

- [Introduction](#introduction)
- [Problem Solution Discussion](#problemDiscussion)
- [Javascript Code](#code)

<a name="introduction"></a>

## Introduction

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.

<a name="problemDiscussion"></a>

## Problem Solution Discussion

- First we have to store the elements of one array with their total appearance or count. Using a map this can be done. If the element already exists in the map, the value gets increased by one. If not then it is inserted into the map,whose value will be 0.

- Then the second array is checked to see if it's elements are already in the map. If any value already exits then it is pushed into the result array. Then value of the element in the map is reduced by one.

- The result array is returned with the values. If no values are common then an empty array is returned.

<a name="code"></a>

## Javascript Code

This is the Javascript olution using map to iterate over the element and compare the elements. An array is used to return the answer.

```
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let map = new Map();
  let result = [];

  for (let i of nums1) {
    map.has(i) ? map.set(i, map.get(i) + 1) : map.set(i, 1);
  }

  for (i of nums2) {
    map.has(i) && map.get(i) > 0
      ? result.push(i) && map.set(i, map.get(i) - 1)
      : false;
  }

  return result;
};

```

N.B: If you want you can do this by sortin the arrays and then compare their value one by one. Also can be done using objects.

- Time complexity O(m+n).

Hope you understood the solution.
