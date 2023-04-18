// 283. Move Zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.


// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    //for loop and splice!

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            nums.splice(i,1)
            nums.push(0)
        }
    }

};


//Will be an integer array. might contain 0's or negative, or positive numbers

//Return the same array in place(without making a copy) where all 0's are moved to the end while maintaining the relative order of the array

//E: Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]