/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    var max = 0;
    for(let i=0;i<accounts.length;i++){
        var wel = 0;
       for(let j=0;j<accounts[i].length;j++){
           wel+=accounts[i][j];
       }
        max = Math.max(max, wel)
    }
    return max;
};