// 617. Merge Two Binary Trees

// You are given two binary trees root1 and root2.

// Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

// Return the merged tree.

// Note: The merging process must start from the root nodes of both trees.


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
 * @return {TreeNode}
 */
 var mergeTrees = function(root1, root2) {
    //if theres no root1, then return root 2
    if (!root1) return root2;
    //vice versa
    else if (!root2) return root1;
    //if theres a overlap
    else {
        //add the new nodes
        root1.val += root2.val;
        //recursively call the left and right of both nodes
        root1.left = mergeTrees(root1.left, root2.left);
        root1.right = mergeTrees(root1.right, root2.right);
        return root1
    }
};


//Will be given two binary trees. always will be valid

//return a single binary tree where if we put the binary trees on top of eachother, some nodes of the two trees are overlapped while otheres are not. we need to merge the two trees into a new binary tree.

//if nodes overlap, then sum node values up as the new value of the merged node. otherwise, the not null node will be used as the node of the new tree