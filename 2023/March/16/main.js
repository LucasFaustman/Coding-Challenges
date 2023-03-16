// 98. Validate Binary Search Tree
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left 
// subtree
//  of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.


// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -231 <= Node.val <= 231 - 1

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
 * @return {boolean}
 */
 var isValidBST = function(root) {
    //dfs here

    let dfs = (root, min, max) => {
        //base cases
        if (!root) {
            return true;
        }

        if (root.val >= max || root.val <= min) {
            return false;
        }

        //recursive case
        
       return dfs(root.left, min, root.val) && dfs(root.right, root.val, max)

    }
    return dfs(root, -Infinity, Infinity)
};

//A root of a binary tree. number of nodes in tree will range from 1 to 10 to the 4
//each value will be between a lot of - nums and a lot of + nums!

//Return a boolean true if the binary tree is a valid BST

//A valid BST is as follows:
// The left 
// subtree
//  of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.


//E:
// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.