/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(arr, k) {
    let q = [];
    let res = [];
    let i=j=0;

    while(j<arr.length) {
        while(q.length && q[q.length-1]<arr[j]) q.pop();
        q.push(arr[j]);
        if(j >= k-1) {
            res.push(q[0]);
            if (arr[i] == q[0]) q.shift();
            i++;
        }
        j++;
    }
    return res;
};