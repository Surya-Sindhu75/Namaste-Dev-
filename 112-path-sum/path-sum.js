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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let ans = false;
    if(!root) return ans;
    function traverse(curr, sum) {
        let newSum = curr.val + sum;
        if(!curr.right && !curr.left) {
            if(newSum === targetSum) ans = ans || true;
        }
        curr.right && traverse(curr.right, newSum)
        curr.left && traverse(curr.left, newSum)

    }
    traverse(root, 0);
    return ans;
};