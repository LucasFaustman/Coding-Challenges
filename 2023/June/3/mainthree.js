// 230. Kth Smallest Element in a BST

// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

// Constraints:

// The number of nodes in the tree is n.
// 1 <= k <= n <= 104
// 0 <= Node.val <= 104

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
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(root, k) {
    //array
    let arr = [];

    //dfs and add each node val to the array

    function helper(root) {
        if (!root) {
            return;
        }

        arr.push(root.val)

        helper(root.left)
        helper(root.right)
    }

    helper(root)
    //sort arr 
    arr.sort((a,b) => b-a)
    return arr[arr.length - k]
    //return arr[arr.length - 1 - k]
};

//Root of a bst

//Return the kth smallest integer of all of the values of the nodes in the truu