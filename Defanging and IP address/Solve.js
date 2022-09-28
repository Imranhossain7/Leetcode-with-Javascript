/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
   var res = address.replaceAll(".","[.]");
    return res;
    
};