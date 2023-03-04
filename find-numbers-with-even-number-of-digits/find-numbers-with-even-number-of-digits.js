/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0;
    
    nums.forEach(item => {
        let str = item.toString()
        if(str.length % 2 == 0) {
            count ++
        }
    })
    return count
};