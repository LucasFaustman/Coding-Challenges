// 334. Increasing Triplet Subsequence

// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

// Constraints:

// 1 <= nums.length <= 5 * 105
// -231 <= nums[i] <= 231 - 1


/**
 * @param {number[]} nums - array of integers
 * @return {boolean} - true if there exists a triplet of indices where i < j < k and nums[i] < nums[j] < nums[k], false otherwise
 */

 var increasingTriplet = function(nums) {
    let first = Infinity; // smallest value seen so far 
    let second = Infinity; // second smallest value seen so far 
    
    // iterate through the array
    for (let num of nums) {
        // if the current number is smaller than or equal to the smallest number seen so far, update the smallest number
        if (num <= first) {
            first = num;
        }
        // if the current number is greater than the smallest number seen so far but smaller than or equal to the second smallest number seen so far, update the second smallest number
        else if (num <= second) {
            second = num;
        }
        // if the current number is greater than both the smallest and second smallest numbers seen so far, then there exists a triplet of indices where i < j < k and nums[i] < nums[j] < nums[k]
        else {
            return true;
        }
    }
    
    // if we reach the end of the loop without finding a valid triplet, return false
    return false;
 };
 
 //Will be an integer array. will always be a valid int array
 
 //Return true if there exists a triple of indices such that i < j < k AND nums[i] < nums[j] < nums[k]
 
 //else return false
 
 //Example 1:
 
 // Input: nums = [1,2,3,4,5]
 // Output: true
 // Explanation: Any triplet where i < j < k is valid.
 // Example 2:
 
 // Input: nums = [5,4,3,2,1]
 // Output: false
 // Explanation: No triplet exists.
 // Example 3:
 
 // Input: nums = [2,1,5,0,4,6]
 // Output: true
 // Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
 