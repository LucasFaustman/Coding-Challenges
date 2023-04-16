// 485. Max Consecutive Ones
// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Constraints:

// 1 <= arr.length <= 1000
// 1 <= arr[i] <= 1000
// 1 <= k <= 1000
// arr[i] < arr[j] for 1 <= i < j <= arr.length


/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
    // //declare maxnumberofones variable
    // let maxNumberOfOnes = 0;

    // //declare a current
    // let current = 0;
    // //for loop
    // for (let i= 0; i < nums.length; i++) {
    //     if (nums[i] === 1) {
    //         current++
    //     } else if(current > maxNumberOfOnes) {
    //         maxNumberOfOnes = current;
    //         current = 0;
    //     } else {
    //         current = 0;
    //     }
    // }
    // //if we have one remaining 1 left over in current, return the higher num
    // return current > maxNumberOfOnes ? current : maxNumberOfOnes

    let max = 0;
    let current = 0;
  
    for (let i = 0; i < nums.length; i++) {
      // Reset current max if value at current index is zero, increment otherwise.
      current = (nums[i] === 0) ? 0 : current + 1;
      
      // Store current max to max, if current iteration found max consecutive 1s.
      max = (current > max) ? current: max;
    }
  
    return max;
};

//Will be an array of either 0's or 1's. always will be valid array and always will only contain 1's or 0's

//Return the maximum number of consecutive 1's in the array

//Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.