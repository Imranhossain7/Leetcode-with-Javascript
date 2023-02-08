# 1859.Sorting the Sentence

- [Introduction](#introduction)
- [Problem Solution Discussion](#problemDiscussion)
- [Javascript Code](#code)

<a name="introduction"></a>

## Introduction

A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

Example 1:

Input: s = "is2 sentence4 This1 a3"
Output: "This is a sentence"
Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.

Example 2:

Input: s = "Myself2 Me1 I4 and3"
Output: "Me Myself and I"
Explanation: Sort the words in s to their original positions "Me1 Myself2 and3 I4", then remove the numbers.

<a name="problemDiscussion"></a>

## Problem Solution Discussion

- At first the string needs to be made seperate into words,which can be done by using split() funtion.

- Create a sort method which does sort the words by the relation between the last characters As the last letter is their index number they are sorted as per their position.C

- Now the task is to remove the digit from last position.Here slice() is used to rempove the last component, you can also use other methods like substr().

- At last the modified words are joined togehter to form the whole sentence using join().

<a name="code"></a>

## Javascript Code

This is the Javascript solution to return the answer.

```
/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let parts = s.split(' ').sort((a, b) => a[a.length - 1] - b[b.length - 1]).map((part) => part.slice(0, part.length-1)).join(' ');
    return parts;
};

```

This is the Javascript solution divided into lines to understand the process better.

```
/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let parts = s.split(' ');
    let second = parts.sort((a, b) => a[a.length - 1] - b[b.length - 1]);
    let third = second.map((word) => word.slice(0, word.length-1))
    let fourth = third.join(' ');
    return fourth;
};

```

- [Runtime: 66 ms, Beats: 60.69%],[Memory: 42.4 MB, Beats: 12.28%]

Hope you understood the solution.
