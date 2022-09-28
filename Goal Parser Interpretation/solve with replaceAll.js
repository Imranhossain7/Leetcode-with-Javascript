/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    var result= command.replaceAll("()","o");
    var res= result.replaceAll("(al)","al");
 return res;
};