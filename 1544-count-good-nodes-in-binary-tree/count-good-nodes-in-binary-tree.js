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
var goodNodes = function(root) {
    let good = 0;
    function traverse(curr, maxSeen) {
        if(!curr) return;
        if(curr.val >=maxSeen) {
            ++good;
            maxSeen = curr.val;
        }
        traverse(curr.left, maxSeen);
        traverse(curr.right, maxSeen);

    }
    traverse(root, -Infinity);
    return good;
};