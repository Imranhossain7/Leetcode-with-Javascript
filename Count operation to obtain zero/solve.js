/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function(num1, num2) {
    var step = 0;
    while(num1 && num2 > 0){
        if(num1>num2){
            num1-=num2;
        }
        else{
            num2-=num1;
        }
        step++
    }
    return step;
};