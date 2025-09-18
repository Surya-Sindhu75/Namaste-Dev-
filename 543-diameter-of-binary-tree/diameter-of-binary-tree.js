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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let ans = 0;
    function height(root) {
        if(!root) return 0;
        let left = height(root.left);
        let right = height(root.right);
        if(left + right > ans) ans = left + right;
        return 1 + Math.max(left, right);
    }
    height(root);
    return ans;

};