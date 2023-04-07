// 938. Range Sum of BST
// Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].


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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var rangeSumBST = function(root, low, high) {
    //first have a sumofnodesvariables

    let sumOfValues = 0;

    //dfs function
    function dfs(root) {
        if (!root) {
            return;
        }
        //if value is between low and high, add to sum

        if (root.val >= low && root.val <= high) {
            sumOfValues += root.val
        }

        dfs(root.left)
        dfs(root.right)


    }

    dfs(root)
    return sumOfValues;
};

//Given the root of a binary tree. will always be valid. also will be given two integers. always will be valid integers and also positive

//return the sum of all values of all nodes with a value in the inclusive range of low and high