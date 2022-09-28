/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    
            
    var result = command.replace(/\(\)/g,"o").replace(/\(al\)/g,"al")
    
       
    return result;
    }