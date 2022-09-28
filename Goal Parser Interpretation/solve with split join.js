/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    var result= command.split("(al)").join("al");
    var res= result.split("()").join("o");
 return res;
};