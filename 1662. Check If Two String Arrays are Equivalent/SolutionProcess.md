# 1662. Check If Two String Arrays are Equivalent

- [Introduction](#introduction)
- [Problem Solution Discussion](#problemDiscussion)
- [Javascript Code](#code)

<a name="introduction"></a>

## Introduction

Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.

Example 1:

Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.

Example 2:

Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
Output: false

Example 3:

Input: word1 = ["abc", "d", "defg"], word2 = ["abcddefg"]
Output: true

<a name="problemDiscussion"></a>

## Problem Solution Discussion

- Elements of the both arrays need to compared as strings.

- The join() method returns an array as a string.The join() method does not change the original array.Any separator can be specified. The default is comma (,).USe join() method on both array to get the elements as string.

- Keep the elements of two arrays in two new variables and compare them.If the strings are equal return true else return false.

<a name="code"></a>

## Javascript Code

This is the Javascript solution to return the answer.

```
/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let str1 =  word1.join('')
    let str2 =  word2.join('')

    return str1 === str2
};

```

- [Runtime: 69 ms, Beats: 44.99%],[Memory: 41.9 MB, Beats: 75.68%]

Hope you understood the solution.
