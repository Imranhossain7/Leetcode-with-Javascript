/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  for (const cha of magazine) {
    ransomNote = ransomNote.replace(cha, "");
  }

  if (!ransomNote) return true;
  else return false;
};
