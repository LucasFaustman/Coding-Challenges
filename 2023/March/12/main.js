// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100

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
 var maxDepth = function(root) {
    //first declare a maxdepth count
    let maxDepth = 0;

    //dfs search
    function dfs(root, level) {
        //if no valid root, return
        if (!root) return;  
        //if our maxDepth is less than our level, reassign maxDepth to level
        if (maxDepth < level) {
            maxDepth = level;
        }
        //recursively call the left and right child of the root node, adding 1 to level, meaning we are going down the path

        dfs(root.left, level + 1);
        dfs(root.right, level+1)
    }

    dfs(root,1)
    return maxDepth;
};

//Will.be a root of a binary tree. number of nodes in tree will be between 0 and 10 to the 4
//values of nodes will be between -100 and 100

//Return the maximum depth of the number of nodes along the longest path from the root node down to the farthest leaf node

//Input: root = [3,9,20,null,null,15,7]
//Output: 3