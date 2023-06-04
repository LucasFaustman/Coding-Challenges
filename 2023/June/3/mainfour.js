// 105. Construct Binary Tree from Preorder and Inorder Traversal

// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) return null; //if invalid inputs return false

    let root = new TreeNode(preorder[0]) //our root node is preorder[0]
    let mid = inorder.indexOf(preorder[0]) //everything to left of mid is our root.left, everything to right is root.right
    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0,mid)) //recursively build our tree on the left side
    root.right = buildTree(preorder.slice(mid+1), inorder.slice(mid + 1)) //recursively build tree on right side
    return root;
};

//Will be two integer arrays, preorder and inorder arrays, where preorder is the preorder traversal of a binary tree and inorder is the isorder traversal of same tree

//Return a tree where we construct the tree based on the inorder and preorder traversal