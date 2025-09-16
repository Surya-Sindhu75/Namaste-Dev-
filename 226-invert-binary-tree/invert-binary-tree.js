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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    function invert(curr) {
        if(!curr) return;
        invert(curr.left);
        invert(curr.right);
        [curr.left, curr.right] = [curr.right, curr.left]
    }
    invert(root);
    return root;
};