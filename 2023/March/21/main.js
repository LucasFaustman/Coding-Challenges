// 404. Sum of Left Leaves
// Given the root of a binary tree, return the sum of all left leaves.

// A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.


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
 var sumOfLeftLeaves = function(root) {
    //we want to return an int, declare and return the variable
    let leftLeafCount = 0;

    //dfs function, with our root, and a param boolean representing if we are on a left side
    function dfs(root, isLeft) {
        //if no root, return 0
    if (!root) {
        return 0;
    }

    //if theres no root.left, no root.right, and we are on the left side
    if (!root.left && !root.right && isLeft) {
        //add root.val to leafcount
       leftLeafCount += root.val;
    }
    //pass in our left root with a boolean of true, right with boolean of false
    return dfs(root.left, true) + dfs(root.right, false);
}

    //dfs
    dfs(root)
    return leftLeafCount;
    
};

//Will be given the root of a binary tree. always will be valid

//Return the sum of all left leaves

//E: Input: root = [3,9,20,null,null,15,7]
// Output: 24
// Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
