/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
            for(var res = 0;num > 0; res++) num % 2? num -= 1 : num /= 2
            return res;
        };