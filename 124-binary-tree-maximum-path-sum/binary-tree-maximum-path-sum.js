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
var maxPathSum = function(root) {
    let maxSumPath = -Infinity;
    function traverse(curr) {
        if(!curr) return 0;
        let maxLeft = Math.max(traverse(curr.left), 0);
        let maxRight = Math.max(traverse(curr.right), 0);

        let currMax = curr.val + maxLeft + maxRight;
        maxSumPath = Math.max(maxSumPath, currMax);

        return curr.val + Math.max(maxLeft, maxRight);
    }
    traverse(root);
    return maxSumPath;
    
};