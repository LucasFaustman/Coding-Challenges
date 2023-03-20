// 637. Average of Levels in Binary Tree

// Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.

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
 * @return {number[]}
 */
 var averageOfLevels = function(root) {
    
    //returning an array
    let res = [];

    function dfs(root,level) {
        
        if (!root) {
            return;
        }
        //if length of res === level, push our value
        if (res.length === level) {
            res.push([root.val])

            //if level is greater than length, we can push to our current level
        } else {
            res[level].push(root.val)
        }
        
        
    dfs(root.left, level + 1)
    dfs(root.right, level + 1)

    }

    dfs(root,0);
    //then find averages of each at the end
    return res.map(arr => arr.reduce((acc,num) => acc + num,0) / arr.length);
};


//Will be a root of a binary tree. always will be a root of a binary tree

//Return the average value of the nodes on each level in the form of an array
//Seems like they want their average numbs to 5th decimal point
