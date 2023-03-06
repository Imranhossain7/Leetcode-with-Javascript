/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    arr.sort((a,b) => (a-b));
    
    for (let i=0; i< arr.length;i++){
        let low = 0 ;
        let high = arr.length - 1;
        
        while( low <= high) {
            let mid = Math.floor((low+high)/2);
            
            if ( (arr[mid] === arr[i] *2) && mid !== i){
                return true
            }
            else if (arr[mid]< arr[i] *2){
                low = mid + 1;
            }
            else{
                high = mid - 1;
            }
        }
    }
    return false
};