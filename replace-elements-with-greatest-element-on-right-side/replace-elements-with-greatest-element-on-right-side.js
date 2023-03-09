/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let l = arr.length;
    let max = -1;
    
    for(let i = l-1; i>=0; i--){
        let temp = arr[i];
        arr[i] = max;
        max = Math.max(max, temp);
    }
    return arr;
};  
