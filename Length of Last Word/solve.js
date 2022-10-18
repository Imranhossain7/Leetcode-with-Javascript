//58. Length of Last Word
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
   
    var str = s.trim().split(" ");
     var l = str.length;
    var res = str[l-1].length;
    return res;
};