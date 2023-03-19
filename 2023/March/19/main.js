// 590. N-ary Tree Postorder Traversal
// Given the root of an n-ary tree, return the postorder traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var postorder = function(root) {
    //create an array
    let res = [];

    let dfs = (root) => {
        if (!root) {
            return;
        }
        //we want to pass in children of root first...
        if (root.children.length > 0) {
            for (let child of root.children) {
                dfs(child)
            }
        }
        //if no more children, push our val of root to array
        res.push(root.val)
    }

    //pass in root
    dfs(root)
    return res;
    
};

//Will be the root of a n-ary tree. always will be valid

//Return the postorder traversal of nodes values as an array

//E: Input: root = [1,null,3,2,4,null,5,6]
// Output: [5,6,3,2,4,1]