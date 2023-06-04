// 572. Subtree of Another Tree

// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

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
    // If subRoot is null, it is considered a subtree of any tree
    if (!subRoot) return true;
    
    // If root is null, there is no subtree to compare, so return false
    if (!root) return false;
    
    // If the current nodes of root and subRoot are the same, check if the subtrees are the same
    if (isSameTree(root, subRoot)) {
        return true;
    }
    
    // Check if subRoot is a subtree of the left or right subtree of root
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
    
    // Helper function to check if two trees are the same
    function isSameTree(root, subRoot) {
        // If both nodes are null, they are considered the same
        if (!root && !subRoot) {
            return true;
        }
        // If both nodes are not null and have the same value, check their subtrees
        else if (root && subRoot && root.val === subRoot.val) {
            return isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right);
        }
        // If any of the above conditions are not satisfied, the trees are not the same
        return false;
    }
};

//Will be 2 binary trees.

//Return  true if there is a subtree of root with the same structure and node values of subroot and false otherwise