//191. Number of 1 Bits

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var total = 0;
    const m = n.toString(2)
    for ( i of m){
        if( i === "1"){
            total += 1;
        }
    }
    return total;
};
