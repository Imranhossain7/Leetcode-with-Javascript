/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    if (s.length == 0) {
    return true;
  }
    
    var mod = s.toLowerCase().replace(/\W|_/g, '');;
    
    let i = 0;
    let j = mod.length -1 ;
    
   while (i < j) {
    if (mod[i] != mod[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
   
};



