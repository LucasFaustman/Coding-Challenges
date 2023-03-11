// Given the root of an n-ary tree, return the preorder traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// 0 <= Node.val <= 104
// The height of the n-ary tree is less than or equal to 1000.

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function(root) {
    //declare an array to return
    let res = [];
    //helper function
    function helper(root) {
        //if theres no root, just return
        if (!root) return;
        //push the val of the root to res
        res.push(root.val);
        //for each child of the root, rerun the helper function
        for (let child of root.children) {
            helper(child);
        }

    }

    //call and return
    helper(root);
    return res;
};


//A tree. number of nodes in tree is in range between 0 and 10 to the 4
//Each val of node will be between - and 10 to the 4
//height of the tree is less than or equal to 1000

//Return an array representing the preorder traversal of nodes values

//E:
// Input: root = [1,null,3,2,4,null,5,6]
// Output: [1,3,5,6,2,4]