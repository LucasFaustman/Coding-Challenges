// 100. Same Tree
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Constraints:

// The number of nodes in both trees is in the range [0, 100].
// -104 <= Node.val <= 104

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {

    //dfs

    function dfs(root1,root2) {
        //if no root1 and theres a root 2, return false and vice versa
       if ((!root1 && root2) || (root1 && !root2)) {
            return false;
        }
    //if theres both no root1 or root2, we know it's the same tree, so we can return true
        if (!root1 && !root2) {
            return true;
        }
        //if values are not equal to eachother, return false

        if (root1.val !== root2.val) {
            return false;
        }
    //return to propagate the result of the recursive calls
        return dfs(root1.left, root2.left) && dfs(root1.right, root2.right);

    }


    return dfs(p,q)    
};
//WIll be 2 roots of binary trees. always will be valid!

//Return a boolean true if the roots are the same, false if not

//they are considered the same if they are structurally identical and the nodes have the same value value