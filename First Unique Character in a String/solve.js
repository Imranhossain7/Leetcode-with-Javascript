//387. First Unique Character in a String

  @param {string} s
  @return {number}
 
var firstUniqChar = function(s) {
   
    for( let i=0; i s.length;i++)
        if(s.indexOf(s[i]) == s.lastIndexOf(s[i])) return i;
   return -1;    
};

