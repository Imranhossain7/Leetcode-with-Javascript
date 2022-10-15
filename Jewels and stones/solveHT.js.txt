// Solved using Hash table
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
          let sum =0;
   const jhash = {};
    for( const jewel of jewels){
        jhash[jewel] = true;
    }
    
    for ( const stone of stones){
        if(stone in jhash){
            sum+=1;
        }
    }
     return sum;
}