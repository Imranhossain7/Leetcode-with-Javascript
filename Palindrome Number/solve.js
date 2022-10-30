/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let s = x.toString();
    let n=s.length-1;
    let m = 0;
    
    while(m<n){
        if(s[m]==s[n] ) m++,n--;
       else return false;
    }
    return true;
    
    
};