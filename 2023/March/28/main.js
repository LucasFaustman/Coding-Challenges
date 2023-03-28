// 530. Minimum Absolute Difference in BST

// Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

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
 var getMinimumDifference = function(root) {
    //declare a mindifference to infinity, and a prev value set to null
    let minDifference = Infinity;
    let prevValue = null;

    function dfs(node) {
        if (!node) {
            return;
        }
        //recursively call left node
        
        dfs(node.left);

        //if our prev value is not null, reasign minDifference to vode.val - prevval
        
        if (prevValue !== null) {
            minDifference = Math.min(minDifference, node.val - prevValue);
        }
        //reassign prevvalue to our current node value
        prevValue = node.val;
        
        //then call right node
        dfs(node.right);
    }

    dfs(root);
    return minDifference;
    
};

//Will be the root of a binary tree. will always be valid

//Return the absolute min difference between values of any two different nodes in the tree

//Input: root = [4,2,6,1,3]
// Output: 1