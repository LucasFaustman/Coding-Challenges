// 133. Clone Graph
// Medium
// 8.3K
// 3.3K
// Companies
// Given a reference of a node in a connected undirected graph.

// Return a deep copy (clone) of the graph.

// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }
 

// Test case format:

// For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

// An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

// The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
 var cloneGraph = function(node) {
    // Edge case: If the node is null, return null
    if (node === null) {
        return null;
    }
    
    // Create a map to hold if we created a copy or not of a specific node
    const map = new Map();
    
    // Recursive function to clone a node and its neighbors
    function clone(root) {
        // If the node has not been cloned yet, create a new clone and add it to the map
        if (!map.has(root.val)) {
            map.set(root.val, new Node(root.val))
            
            // Clone the neighbors by recursively calling the clone function on each neighbor
            map.get(root.val).neighbors = root.neighbors.map(clone)
        }
        
        // Return the cloned node corresponding to the current root
        return map.get(root.val)
    }
    
    // Start the cloning process from the given node and return the cloned node
    return clone(node)
};


//GIven a reference of a node in a connected undirected graph. node might be null!

//Return a deep copy(clone) of the graph