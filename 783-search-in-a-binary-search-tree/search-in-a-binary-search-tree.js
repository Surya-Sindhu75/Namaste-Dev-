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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let ans = null;
    function check(curr) {
        if(!curr) return;
        if(curr.val === val) ans = curr;
        check(curr.left);
        check(curr.right);
    }
    check(root);
    return ans;
};