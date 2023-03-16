// 235. Lowest Common Ancestor of a Binary Search Tree
// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Constraints:

// The number of nodes in the tree is in the range [2, 105].
// -109 <= Node.val <= 109
// All Node.val are unique.
// p != q
// p and q will exist in the BST.

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
    //recursive solution
    //6, 2, 4
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left,p,q)
    } else if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p,q)
    } else {
        return root;
    }
};

//Wille be 3 params. One will be a tree where nodes are in the range of 2 to 10 to the power of 5. node values will be between -10 to the 9 and vice versa
//2 other params will be nodes it seems like. they will never be equal to eachother and will always exist in bst

//Return the lowest common ancestor between two given nodes
//According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

//E:

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.