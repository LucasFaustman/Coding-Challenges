// 46. Permutations

// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    let res = [];

    // Base case: If the input array has only one element, return a copy of it
    if (nums.length === 1) {
        return [nums.slice()];
    }

    // Iterate over every value in nums
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];  // Select the current number from the input array

        // Generate the remaining numbers by excluding the current number
        const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));

        // Recursively generate permutations for the remaining numbers
        const perms = permute(remainingNums);

        // Iterate over each permutation and append the current number to it
        for (const perm of perms) {
            perm.push(n);  // Append the current number to the permutation
            res.push(perm);  // Add the permutation to the result array
        }
    }

    return res;  // Return the final array of permutations

}

//Will be an array of distinct integers. always will be a valid array full of valid positive ints. all ints will be unique.

//Return all possible permutations of the param. we can return the answer in any order

//Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]