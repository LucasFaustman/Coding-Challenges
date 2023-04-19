// 53. Maximum Subarray
// Given an integer array nums, find the 
// subarray
//  with the largest sum, and return its sum.

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104


/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    // Initialize variables to store the maximum subarray sum seen so far and the current subarray sum
     let maxSum = nums[0];
     let currSum = nums[0];
     
     // Iterate over the array starting from the second element
     for (let i = 1; i < nums.length; i++) {
         // Update the current subarray sum as the maximum of the current element and the sum of the current element and the previous subarray sum
         currSum = Math.max(nums[i], currSum + nums[i]);
         // Update the maximum subarray sum seen so far as the maximum of the current subarray sum and the previous maximum subarray sum
         maxSum = Math.max(maxSum, currSum);
     }
     
     // Return the maximum subarray sum seen so far
     return maxSum;
 
 };
 
 
 //WIll be an integer array. integers might be negative, positive, or 0. always will be valid
 
 //Return the sum of the subarray with the largest sum
 
 //E
 
 // Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 // Output: 6
 // Explanation: The subarray [4,-1,2,1] has the largest sum 6.