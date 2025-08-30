/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let obj = {};
    let i = 0, maxLen = 0;

    for (let j = 0; j < s.length; j++) {
        if (obj.hasOwnProperty(s[j]) && obj[s[j]] >= i) {
            // move i just past the previous duplicate
            i = obj[s[j]] + 1;
        }
        obj[s[j]] = j; // update last seen index
        maxLen = Math.max(maxLen, j - i + 1);
    }

    return maxLen;
};
