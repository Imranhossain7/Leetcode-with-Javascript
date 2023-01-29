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
