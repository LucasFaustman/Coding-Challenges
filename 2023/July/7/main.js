// 75. Sort Colors
// Medium
// 15.6K
// 548
// Companies
// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Constraints:

// n == nums.length
// 1 <= n <= 300
// nums[i] is either 0, 1, or 2.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    //dutch national flag algorithm
   let low = 0; // pointer for 0s
  let mid = 0; // pointer for 1s
  let high = nums.length - 1; // pointer for 2s

  while (mid <= high) {
    if (nums[mid] === 0) {
      // Swap nums[low] and nums[mid]
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      // nums[mid] === 2
      // Swap nums[mid] and nums[high]
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
};

//Will be an array of nums. always will be an array. nums will either b 0, 1, or 2. these numbers represent the color red, white, or blue

//Return a new array, where the original array is sorted in place so the objects of the same color are adjacent, with the colors in order

//without .sort

//Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]