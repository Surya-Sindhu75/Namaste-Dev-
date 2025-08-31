/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let obj = {};
    let i = 0, maxLen = 0, maxCount = 0;

    for (let j = 0; j < s.length; j++) {

        obj[s[j]] = (obj[s[j]] || 0)+1;
        maxCount = Math.max(maxCount, obj[s[j]]);
        if((j-i+1) - maxCount > k) { // not valid window
            obj[s[i]]--;
            i++;
        }
        maxLen=Math.max(maxLen, j-i+1);
    }

    return maxLen;
};