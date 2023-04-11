// 111. Minimum Depth of Binary Tree

// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

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
 var minDepth = function(root) {
    // If node is empty return 0
    if (!root) return 0;
    
    // If the left node is empty DFS into right node
    if (!root.left) return minDepth(root.right) + 1;
    
    // If the right node is empty DFS into left node
    if (!root.right) return minDepth(root.left) + 1;
    
    // If neither left nor right nodes are empty, find the minium of the each DFS traversal
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

//Will be a binary tree

//Return the min depth of the binary tree

//Min depth is the number of nodes along the shortest path from the root node down to the nearest leaf node