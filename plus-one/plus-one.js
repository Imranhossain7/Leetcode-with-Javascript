/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let str = digits.join('');
  let num = BigInt(str) + BigInt(1);
  str = num.toString();
  let arr = str.split("")
    console.log(arr)
  return arr;
};
