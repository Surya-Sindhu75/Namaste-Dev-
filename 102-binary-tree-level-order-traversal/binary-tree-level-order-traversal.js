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
var levelOrder = function(root) {
    if(!root) return []
    let q = [root];
    let ans = [];
    while(q.length) {
        let arrLevel = [];
        let levelSize = q.length;
        for(let i=0;i<levelSize;i++) {
            let curr = q.shift();
            if (curr.left) q.push(curr.left);
            if (curr.right) q.push(curr.right);

            arrLevel.push(curr.val);
        }
        ans.push(arrLevel);
    }
    return ans;
    
};