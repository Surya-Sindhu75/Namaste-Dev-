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
var isValidBST = function(root) {
    function traverse(curr) {
        if (!curr) return { valid: true, min: Infinity, max: -Infinity };

        let left = traverse(curr.left);
        let right = traverse(curr.right);

        // if either subtree is invalid → bubble up false
        if (!left.valid || !right.valid) {
            return { valid: false };
        }

        // check BST property: left.max < curr.val < right.min
        if (curr.val <= left.max || curr.val >= right.min) {
            return { valid: false };
        }

        // return updated min and max for this subtree
        return {
            valid: true,
            min: Math.min(left.min, curr.val),
            max: Math.max(right.max, curr.val)
        };
    }

    return traverse(root).valid;
};
