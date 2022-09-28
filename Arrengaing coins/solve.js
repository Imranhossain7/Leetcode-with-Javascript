/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    var str = 1;
    while(n>=str){
        n-=str;
        str++
    }
    return str-1;
    
};