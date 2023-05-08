// 55. Jump Game
// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

// Constraints:

// 1 <= nums.length <= 104
// 0 <= nums[i] <= 105

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
    //greedy
  
    // Initialize the variable max to the value of the first element of the array nums.
    let max = nums[0];
  
    // For loop to iterate over each element in the array nums.
    for (let i= 0; i < nums.length; i++) {
        // If the maximum reachable index is less than the current index i, return false.
        if (max < i) {
            return false;
        }
  
        // Update the maximum reachable index (max) to the maximum value between its current value and the sum of the current index i and the value at nums[i].
        max = Math.max(max, i + nums[i])
    }
  
    // If we reach here, then we have reached the end of the array, so return true.
    return true;
  };
  
  
  //Will be an integer array. Integers will always be between 0 and positive infinity. always will be a valid integer array
  
  //Return  boolean true if....
  
  //we are initially positioned at the arrays first index, and each element in the array represents your maximum jump length at that position
  
  //return true if we can reach last index, false otherwise
  
  // Example 1:
  
  // Input: nums = [2,3,1,1,4]
  // Output: true
  // Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
  // Example 2:
  
  // Input: nums = [3,2,1,0,4]
  // Output: false
  // Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.