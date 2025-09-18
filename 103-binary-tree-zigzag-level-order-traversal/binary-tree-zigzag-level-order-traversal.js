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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) return [];
    let q =[root];
    let ans = [];
    let rightToLeft = 0; //right:0
    while(q.length>0) {
        let currLevel = [];
        let levelLen = q.length;
        for(let i = 0 ; i<levelLen;i++) {
            let ele = q.shift();
            currLevel.push(ele.val);
           
            if(ele.right) q.push(ele.right);
            if(ele.left) q.push(ele.left);
            
        }
        if(!rightToLeft) currLevel.reverse();
        ans.push(currLevel);
        rightToLeft = !rightToLeft;
        
    }
    return ans;
};