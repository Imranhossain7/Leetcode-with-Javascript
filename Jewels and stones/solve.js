// with for loop and split() method 
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
          let sum =0;
     var str = stones.split("");
    var jwl = jewels.split("");
    for(let i=0; i<str.length;i++){
            for(let j=0; j<jwl.length;j++){
                if(str[i] === jwl[j]) sum++;
            }
           
        }
     return sum;
};

