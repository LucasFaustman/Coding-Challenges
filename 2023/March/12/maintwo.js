// 102. Binary Tree Level Order Traversal
// Medium
// 12.6K
// 248
// Companies
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).


// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000

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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    //first create a res array
    let res = [];
    //and level
    let level = 0;

    //dfs
    function dfs (root,level) {
        //9, 20, 1
        //15, 7 and 2
        //if theres no root, return
        if(!root) {
            return;
        } //else, if our level is === to the length of our res array
        //assign res at our level to an empty array
        //basically creating a new level for our resulting array
        else {
            if (level === res.length) {
                res[level] = [];
            }
            //then push our value to the res array
            res[level].push(root.val)
            //then recursively call the left and right node, adding 1 to level
            dfs(root.left, level + 1);
            dfs(root.right, level + 1);

        }

    }
    dfs(root,level)
    return res;
};

//Will be the root of a binary tree. number of nodes in tree will be between 0 and 2000
//values in tree will be between -1000 and 1000

//Return the level order traversal of nodes values from left to right, from level to level, in an array

//Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]