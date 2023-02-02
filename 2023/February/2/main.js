// You are given a non-negative integer array nums. In one operation, you must:

// Choose a positive integer x such that x is less than or equal to the smallest non-zero element in nums.
// Subtract x from every positive element in nums.
// Return the minimum number of operations to make every element in nums equal to 0.

// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 100

/**
 * @param {number[]} nums
 * @return {number}
 */

 var minimumOperations = function(nums, count = 0) {
    //recursion
    
    //get rid of 0's in array
    let nonZeroArray = nums.filter(num => num !== 0)
    //get min number
    let minNum = Math.min(...nonZeroArray)
    //if theres no length after filtering 0's, return our count
    if (!nonZeroArray.length) {
        return count
    }
    //subtract min num from num

    let subtract = nonZeroArray.map(num => num - minNum)
    //rerun our function, passing in our new subtracted array and count + 1
    return minimumOperations(subtract, count + 1)



    //one liner
    // just get the length of all unique non zero integers
    // return new Set(nums.filter(num => num !== 0)).size
};

//Will be an array of numbers. will always will be valid. will all be positive integers!

//Return a number representing the minimum number of operations to make every element in nums equal to 0

//Input: nums = [1,5,0,3,5]
// Output: 3
// Explanation:
// In the first operation, choose x = 1. Now, nums = [0,4,0,2,4].
// In the second operation, choose x = 2. Now, nums = [0,2,0,0,2].
// In the third operation, choose x = 2. Now, nums = [0,0,0,0,0].