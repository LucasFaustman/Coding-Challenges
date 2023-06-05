// 78. Subsets

// Given an integer array nums of unique elements, return all possible 
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// All the numbers of nums are unique.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    // Result array to store the subsets
    let res = [];

    // Array to store the current subset being constructed
    let subset = [];

    // Depth-first search (DFS) function to generate subsets
    function dfs(i) {
        // Base case: if i exceeds the last index of nums
        if (i > nums.length - 1) {
            // Add a copy of the current subset to the result array
            res.push(subset.slice());
            return;
        }

        // Decision to include nums[i] in the subset
        subset.push(nums[i]);
        dfs(i + 1);

        // Decision not to include nums[i] in the subset
        subset.pop();
        dfs(i + 1);
    }

    // Start the DFS recursion with an initial index of 0
    dfs(0);

    // Return the resulting array of subsets
    return res;
};

//WIll be an integer array. always will be an int array, numbers might be negative, 0, or positive. always ints.


//Return all possible subsets of the array. solution must not include any duplicate subsets. can be returned in any order

//EInput: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]