// 80. Remove Duplicates from Sorted Array II
// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// Constraints:

// 1 <= nums.length <= 3 * 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    //have a hash of stored vals
    let hash = {};

    //for loop
    for (let i = 0; i < nums.length; i++) {
      //if the hash is greater than 2, splice it. if not, add to our hash
      if (hash[nums[i]] == 2) {
        nums.splice(i,1)
        i--
      } else {
        hash[nums[i]] = hash[nums[i]] + 1 || 1
      }
    }
};

//Will be an array of integers. always will be a valid integer array

//Return the same integer array in place but with any elements that have a count over 2 removed

//E: nums =
// [1,1,1,2,2,3]
// Output
// [1,1,1,2,2,3]