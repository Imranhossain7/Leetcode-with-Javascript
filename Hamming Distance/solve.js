// //461. Hamming Distance

//   @param {number} x
//   @param {number} y
//   @return {number}

var hammingDistance = function (x, y) {
  let compare = x ^ y;

  let res = compare.toString(2);

  let total = 0;

  for (let i of res) {
    if (i === "1") {
      total++;
    }
  }
  return total;
};
