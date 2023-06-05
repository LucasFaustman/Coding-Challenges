// 39. Combination Sum

// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
// frequency
//  of at least one of the chosen numbers is different.

// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
    // Result array to store the combinations that sum up to the target
    let res = [];

    // Depth-first search (DFS) function to generate combinations
    function dfs(i, curr, total) {
        // Base case: if the total sum is equal to the target
        if (total === target) {
            // Add a copy of the current combination to the result array
            res.push(curr.slice());
            return;
        } 
        // Base case: if the index i exceeds the last index of candidates
        // or if the total sum exceeds the target
        else if (i > candidates.length - 1 || total > target) {
            return;
        }

        // Choose the current candidate candidates[i] in the combination
        curr.push(candidates[i]);
        dfs(i, curr, total + candidates[i]);

        // Backtrack by removing the last candidate from the combination
        curr.pop();
        dfs(i + 1, curr, total);
    }

    // Start the DFS recursion with an initial index of 0,
    // an empty current combination, and a total sum of 0
    dfs(0, [], 0);

    // Return the resulting array of combinations
    return res;
};

//Will be 2 params. first param will be an array of distinct integers. integers will always be a positive integer. always will be distinct integers. always valid

//Other parameter will be a target integer. always will be a positive integer

//Return a list(array) of all unique combos of canidates where the chosen numbers add up to sum. may return the combos in any order

//The same number may be chosen from canidates an unlimited amount of times. two combos are unique if the frequency of at least one of the numbers is different

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.