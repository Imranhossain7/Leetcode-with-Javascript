/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let l = arr.length;
    
    if(l<3){
        return false;
    }
    
    let i =0;
    
    while( i< l && arr[i+1] > arr[i]){
        i++
    }
    
    if( i === 0 || i === arr.length-1){
        return false;
    }
    
    while( i < l && arr[i+1] < arr[i]){
        i++
    }
    
    return i == arr.length -1;
    
};