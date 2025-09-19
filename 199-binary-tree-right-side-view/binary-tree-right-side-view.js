/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    let ans = [];
    if(!root) return ans;
    let q = [root];
    while(q.length>0) {
        let currLevel = [];
        let qLen = q.length;
        for(let i=0;i<qLen;i++) {
            let ele = q.shift();
            currLevel.push(ele.val);
            if(ele?.right) q.push(ele.right);
            if(ele?.left) q.push(ele.left);
        }
        //console.log(currLevel);
        ans.push(currLevel[0]);
    }
    return ans;
};