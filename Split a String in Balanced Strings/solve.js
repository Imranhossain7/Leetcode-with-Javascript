//1221. Split a String in Balanced Strings

/**
 * @param {string} s
 * @return {number}
 */
 var balancedStringSplit = function(s) {
    var l = s.length  ;
      let count=1, result = 0;
      
      for ( i=1;i<l;i++){
          (s[i] !== s[0])? count-- : count++;
          if(count == 0){
              result+=1;
          }
      }
      return result;
  };