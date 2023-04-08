// 1302. Deepest Leaves Sum

// Traverse the tree again to compute the sum required.

// Given the root of a binary tree, return the sum of values of its deepest leaves.
 
// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// 1 <= Node.val <= 100

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
 var deepestLeavesSum = function(root) {
    //dfs here!

    //declare a sum of values vari
    let sumOfDeepestValues = 0;
    let maxDepthCount = 0;
    //get maxdepth first

    function maxDepth(root,level) {
        if (!root) {
            return;
        }

        if (level > maxDepthCount) {
            maxDepthCount = level;
        }

         maxDepth(root.left, level + 1)
         maxDepth(root.right, level + 1)
    }

    //using our max depth, if our level is equal to our max depth, add to root.val

    function deepestLeafFinder(root, level) {
        if (!root) {
            return;
        }

        if (level === maxDepthCount) {
            sumOfDeepestValues += root.val
        }

        deepestLeafFinder(root.left, level + 1)
        deepestLeafFinder(root.right, level + 1)


    }
    maxDepth(root,0)
    deepestLeafFinder(root,0)
    return sumOfDeepestValues
};

//Will be a root of a binary tree. will always be valid

//Return the sum of values of its deepest leaves