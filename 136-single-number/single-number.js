/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(arr) {
    let XOR = 0;
    for (let i = 0; i < arr.length; i++) {
        XOR ^= arr[i];
    }
    return XOR;
};