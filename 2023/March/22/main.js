// 226. Invert Binary Tree
// Given the root of a binary tree, invert the tree, and return its root.

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
    //base case is if no root, return null
    if (!root) {
        return null;
    }
    //get a temporary value and assign it to root.left 
    //reassign root.left to root.right, inverse, and viceversa
        let temp = root.left;
        root.left = root.right;
        root.right = temp;
    //recall our function recurseivly with root.left and root.right
    invertTree(root.right)
    invertTree(root.left)
    //then return our tree at end
    return root;
};


//Will be a root of a binary tree. always will be valid

//Return the inverse of the tree, returning the root

//Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]