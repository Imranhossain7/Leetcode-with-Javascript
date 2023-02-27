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
