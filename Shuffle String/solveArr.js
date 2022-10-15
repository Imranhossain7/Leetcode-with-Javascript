//solved using array and join()

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
    var l = s.length;
    let str = [];
    
    for(i=0; i< l; i ++){
        str[indices[i]] = s[i]
    }
    return str.join('')
    
};