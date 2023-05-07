// 189. Rotate Array
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    //brute force would be to push and shift

    // while (k > 0) {
    //     let poppedVal = nums.pop();
    //     nums.unshift(poppedVal)
    //     k--
    // }

    //avoid full rotations using modulus
    //splice last elemets of array
    //unshift the splice elements to the beginning, using spread operator to spread individual arguments
    return nums.unshift(...nums.splice(-k % nums.length));


};

//2 params in the question. nums array, which will always be an integer array. second param will always be a positive integer

//Return an array where the original array is rotated to the right by k steps

//E:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]