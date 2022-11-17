/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
     
    let st = new Map();
    
    for( i in s){
        (st.set(s[i], st.get(s[i]) == undefined ? 1 : st.get(s[i]) + 1));
    }
 
    let arr = Array.from(st.values())
 
    return(new Set(arr).size === 1)
        
};

