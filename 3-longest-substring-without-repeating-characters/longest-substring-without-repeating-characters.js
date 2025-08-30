/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i=0;
    let arr=[]
    let maxLen =0;
    while(i<s.length) {
       let j=i;
       let curr=0;
       for(let j=i; j<s.length;j++) {
        if(!arr.includes(s[j])) {
            arr.push(s[j]);
            curr++;
        }
        else break;
       }
        console.log(arr)
        i++;
        maxLen=Math.max(curr, maxLen)
        arr=[];
    }
    return maxLen;
};