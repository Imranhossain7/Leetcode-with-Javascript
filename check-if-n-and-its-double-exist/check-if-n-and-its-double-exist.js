/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let l = arr.length;
    
    for(let i = 0;i< l;i++){
        for(let j =0;j<l; j ++){
            if( i !== j && arr[i] === 2*arr[j])
                return true;
        }
    }
    return false;
};