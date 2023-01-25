/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let map = {};

  for (let l of magazine) {
    if (!map[l]) {
      map[l] = 0;
    }
    map[l]++;
  }

  for (let l of ransomNote) {
    if (!map[l]) {
      return false;
    }
    map[l]--;
  }
  return true;
};
