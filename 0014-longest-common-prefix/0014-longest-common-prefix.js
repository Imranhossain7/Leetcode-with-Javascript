/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    if (!strs.length) return "";

    let pre = "";
    let l = strs.length-1;
    let m = strs[0].length;
    
    for(let i=0;i<m;i++){
        for(let j=0;j<l;j++){
            if(strs[j][i] !== strs[j+1][i]) return pre;
        }
            pre += strs[0][i];
        }
     return pre;
    };
   

