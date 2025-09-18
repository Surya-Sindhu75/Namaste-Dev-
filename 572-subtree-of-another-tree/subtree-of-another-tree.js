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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    return hashGenerate(root).includes(hashGenerate(subRoot))
};

function hashGenerate(root) {
    let hash = '';
    function traverse(curr){
        if(!curr) {
        hash = hash + '_#';
        return ;
        }
        hash = hash + '_' + curr.val;
        traverse(curr.right);
        traverse(curr.left);
    }
    traverse(root);
    console.log(hash)

    return hash;
    
}