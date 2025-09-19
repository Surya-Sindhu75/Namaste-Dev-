/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
   let lca = null;
   function search(curr) {
    let count = 0;
    if(!curr) return 0;

   

    if(curr.val === p.val || curr.val ===q.val) count++;

     let left = search(curr.left);
    let right = search(curr.right);
    
    count = count + left + right;
    if(count ===2 && !lca) lca = curr; // !lca, see notes
    return count;

   }
   search(root);
   return lca;
};