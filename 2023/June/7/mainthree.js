// 40. Combination Sum II

// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
    //res array to store the combinations
    let res = [];

    // Sort the candidates array in ascending order
    candidates.sort();

    // Variable to track the previous number used in the combination
    let prev = -1;

    // DFS function to find combinations
    function dfs(index, subset, total) {
        // Base case: If the total sum equals the target, add the combination to the result array
        if (total === target) {
            res.push(subset.slice());
            return;
        }

        // Iterate through the candidates array starting from the given index
        for (let i = index; i < candidates.length; i++) {
            // If the current number is the same as the previous number, skip it to avoid duplicates
            if (candidates[i] === prev) continue;

            // If the total sum exceeds the target or the index goes beyond the array length, return
            if (total > target || index > candidates.length - 1) {
                return;
            }   

            // Recursive case:
            // Include the current candidate number in the combination
            subset.push(candidates[i]);
            dfs(i + 1, subset, total + candidates[i]);

            // Exclude the current candidate number from the combination
            subset.pop();
            prev = candidates[i];
        }
    }

    // Call the DFS function to find combinations starting from index 0, with an empty subset and total sum 0
    dfs(0, [], 0);

    // Return the result array containing all unique combinations
    return res;
};


//2 params. One will be a collection of candidates numbers(candidates). will be an array of integers. always will be a valid array of integers. always will be positive integers, never 0 or negative

//also a target number target. always will be a positive integer, never a float!

//Return all unique combos in candidates where the candidate number sum to target

//each number in candidates may only be used once in the combo

//solution must not contain duplicates

//Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: 
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]