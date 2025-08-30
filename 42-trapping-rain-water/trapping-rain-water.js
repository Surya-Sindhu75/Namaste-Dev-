/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(arr) {
    let maxL=[], maxR=[];
    let n = arr.length;
    maxL[0]=arr[0];
    maxR[n-1]=arr[n-1];
    for(let i=1;i<n;i++) {
        maxL[i]=Math.max(maxL[i-1],arr[i]);
        maxR[n-i-1]=Math.max(maxR[n-i],arr[n-i-1]);
    }

    let ans=0;
    for(let i=0;i<n;i++) {
        let waterTrapped = Math.min(maxL[i], maxR[i]) - arr[i];
        ans = ans+ Math.max(waterTrapped, 0);
    }
    return ans;
    
};