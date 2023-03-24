// 872. Leaf-Similar Trees
// Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.
// For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

// Two binary trees are considered leaf-similar if their leaf value sequence is the same.

// Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
 var leafSimilar = function(root1, root2) {
    //we should create two array variables.
    let root1Leafs = [];
    let root2Leafs = [];

    function dfs(root, arr) {
        if(!root) {
            return;
        }
        //if no left or right, we know we are on a leaf, so push to our array and return
        if (!root.left && !root.right) {
            arr.push(root.val)
            return;
        }
    
        dfs(root.left, arr)
        dfs(root.right, arr)
    }


    dfs(root1, root1Leafs)
    dfs(root2, root2Leafs)
    //then return true if they're equal

        return root1Leafs.join('-') === root2Leafs.join('-')

};


//Will be 2 binary trees. always will be valid

//Return true if the two given trees are leaf similar

//leaf similar refers to each binary tree having the same order of leaf nodes

//EInput: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
// Output: true