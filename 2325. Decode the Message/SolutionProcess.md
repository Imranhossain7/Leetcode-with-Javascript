# 2325. Decode the Message

- [Introduction](#introduction)
- [Problem Solution Discussion](#problemDiscussion)
- [Javascript Code](#code)

<a name="introduction"></a>

## Introduction

You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:

Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
Align the substitution table with the regular English alphabet.
Each letter in message is then substituted using the table.
Spaces ' ' are transformed to themselves.
For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').
Return the decoded message.

Example 1:
Input: key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv"
Output: "this is a secret"
Explanation: The diagram above shows the substitution table.
It is obtained by taking the first appearance of each letter in "the quick brown fox jumps over the lazy dog".

Example 2:
Input: key = "eljuxhpwnyrdgtqkviszcfmabo", message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
Output: "the five boxing wizards jump quickly"
Explanation: The diagram above shows the substitution table.
It is obtained by taking the first appearance of each letter in "eljuxhpwnyrdgtqkviszcfmabo".

<a name="problemDiscussion"></a>

## Problem Solution Discussion

- The goal is to return the original message using the key.The key elemets will redirect to an alphabet according to their position. Like first key letter will convert to 'a' and so on.

- We need to map the key elements to the alphabets which will be 26 in total.First eliminate the duplicate using Set on the key and then again convert into an array

- Take a hash map which will store key as key and the respective alphabet as value. The ittirate over the alphabet as it's lenght will be the maximum lenght of the key taking only the first appearance of an element and store key value pair in the hash.

- Then check for each element of the message and add the respective value from the hash to the result string.If hash has the character add that or add an space as there could be space in the message.

- Return the result(string).

<a name="code"></a>

## Javascript Code

This is the Javascript solution to return the result(string).

```
/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  var result = "";
  key = Array.from(new Set(key.split(" ").join("")));

  let hash = new Map();

  for (let i = 0; i < alpha.length; i++) {
    hash.set(key[i], alpha[i]);
  }

  for (let letter of message) {
    result += hash.get(letter) || " ";
  }
  return result;
};

```

- [Runtime: 68 ms, Beats: 83.3%],[Memory: 45.2 MB, Beats: 19.84%]

Hope you understood the solution.
