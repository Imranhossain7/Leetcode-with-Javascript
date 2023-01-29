# 566. Reshape the Matrix

- [Introduction](#introduction)
- [Problem Solution Discussion](#problemDiscussion)
- [Javascript Code](#code)

<a name="introduction"></a>

## Introduction

In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

Example 1:

Input: mat = [[1,2],[3,4]], r = 1, c = 4
Output: [[1,2,3,4]]

Example 2:

Input: mat = [[1,2],[3,4]], r = 2, c = 4
Output: [[1,2],[3,4]]

<a name="problemDiscussion"></a>

## Problem Solution Discussion

- First we need to check if the new dimension is achieveable from using the current dimenstion. If they are not equal then the matrix can't be converted.

- Taking the multiplication of the given matrix length and the length of the first row, compare this with the multiplication of the new row and column value r and c. If not equal return the input matrix.

- If they are equal then proceed to the next step. First for each row value incert elements in to the new matrix until length of the row is not equal to the new column value. When reaches the column value push the new row array to the new matrix array and set new array value to empty. Then proceed similarly for the bext row value.

- Return the new matrix after all the row is inserted.

<a name="code"></a>

## Javascript Code

This is the Javascript solution using two loop to iterate over the elements. An array is used to insert the row value and another array to return the answer.

```
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  var l = mat.length;
  var col = mat[0].length;
  let arr = [];
  let newMat = [];

  if (l * col !== r * c) return mat;
  for (i = 0; i < l; i++) {
    for (j = 0; j < col; j++) {
      arr.push(mat[i][j]);
      if (arr.length == c) {
        newMat.push(arr);
        arr = [];
      }
    }
  }
  return newMat;
};

```

N.B: If you want you can do this by sortin the arrays and then compare their value one by one. Also can be done using objects.

- [Runtime: 75 ms, Beats: 95.28%],[Memory: 45 MB, Beats: 70.20%]

Hope you understood the solution.
