/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let l = arr.length;
    
    for(let i = 0; i< l;i++){
        if(arr[i]=== 0){
            arr.splice(i,0,0);
            i++;
            l++;
            arr.pop();
        }
    }
    return arr;
};