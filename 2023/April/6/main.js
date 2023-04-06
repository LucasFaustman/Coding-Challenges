// 101. Symmetric Tree
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
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
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    
    //dfs function
    function dfs(left,right) {
        //if we have an equal null value for each side, return true
        if (!left && !right) {
            return true;
        }
        //else if theres no right side, no left side, or vals aren't equal, return false
        if ( !left || !right || left.val !== right.val) {
            return false;
        }

        //recursively call dfs

                return dfs(left.left, right.right) && dfs(left.right, right.left);

    }

    return dfs(root.left, root.right)


};

//Will be the root of a binary tree. will always be valid

//Return boolean true if the tree is a mirror of itself. (ie symmetric around the center)