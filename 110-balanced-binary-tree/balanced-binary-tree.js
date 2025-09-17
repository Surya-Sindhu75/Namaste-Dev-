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
 * @return {boolean}
 */
var isBalanced = function(root) {
    function height(curr) {
        if(!curr) return 0;
        let left = height(curr.left);
        if(left === -1) return -1;

        let right = height(curr.right);
        if(right ===-1) return -1;

        if(Math.abs(left-right)>1) return -1;
        else return 1+Math.max(left,right);
    }
    
    return height(root) !== -1;
};