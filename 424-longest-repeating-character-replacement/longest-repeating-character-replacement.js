/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let obj = {};
    let i = 0, maxLen = 0;

    for (let j = 0; j < s.length; j++) {
        if(obj.hasOwnProperty(s[j])) obj[s[j]]+=1;
        else obj[s[j]]=1;

        // check if curr window is valid
        let objVal =  Object.values(obj);
        let sum = 0;
        objVal.forEach(x => {
            sum += x;
        });
        if(sum-Math.max(...objVal)>k) { // not valid window
            obj[s[i]]--;
            if( obj[s[i]] ===0) delete  obj[s[i]]
            i++;
        }
        maxLen=Math.max(maxLen, j-i+1);
    }

    return maxLen;
};