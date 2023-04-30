// 1038. Binary Search Tree to Greater Sum Tree

// Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus the sum of all keys greater than the original key in BST.

// As a reminder, a binary search tree is a tree that satisfies these constraints:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

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
 var bstToGst = function(root) {
    // //dfs to start, and get all values from root in an array
    // let rootVals = [];

    // function dfs(root) {
    //     if (!root) {
    //         return;
    //     }

    //     rootVals.push(root.val)

    //     dfs(root.left)
    //     dfs(root.right)
    // } 
    // dfs(root)

    // let curr = root;

    // function convertToGst(root) {
    //     if (!root) {
    //         return;
    //     }

    //     root.val = rootVals.reduce((acc,num) => acc + (num > root.val ? num : 0),0) + root.val
    
    //     convertToGst(root.right)
    //     convertToGst(root.left)

    // }   
    // convertToGst(curr)
    // return curr;

    //reverse dfs way
    //declare an accumulation variable
    let accum = 0;
    //helper function
    function helper(root) {
        if (!root) {
            return;
        }
        //traverse right side first(inverse)
        helper(root.right)
        //add our val to accum then reassign our roots value to our accum
        accum += root.val;
        root.val = accum;
        helper(root.left)

        return root;
    }

    return helper(root)


};

//Will be the root of a binary tree. always valid

//Return a greater tree, converting our bst to a greater tree.

//every key of the original bst is changed to the original key plus the sum of all keys greater than the original key
