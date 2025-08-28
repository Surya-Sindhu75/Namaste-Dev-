/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(arr) {
    let ans = []
    arr.sort((a, b) => a - b);
    for(let i=0;i<arr.length-2;i++) {
        if(i==0 || arr[i]!=arr[i-1]) twoSum(arr, i, ans)
    }
    return ans;
};

var twoSum = function(arr, a, ans) {
    let b = a+1;
    let c = arr.length-1;
    while(b<c) {
        let sum = arr[a]+arr[b]+arr[c];
        if(sum>0) c--;
        else if(sum<0) b++;
        else {
            ans.push([arr[a],arr[b], arr[c]]);
            b++; c--;
           // skip duplicates for b
            while (b < c && arr[b] === arr[b - 1]) b++;
            // skip duplicates for c
            while (b < c && arr[c] === arr[c + 1]) c--;
        }
    }
}