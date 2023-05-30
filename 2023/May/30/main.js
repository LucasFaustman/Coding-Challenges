// 153. Find Minimum in Rotated Sorted Array

// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.


// Constraints:

// n == nums.length
// 1 <= n <= 5000
// -5000 <= nums[i] <= 5000
// All the integers of nums are unique.
// nums is sorted and rotated between 1 and n times.

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    //cant we just use math.min for this?
    // return Math.min(...nums)

    //Binary search way
    //declare a left and right variable
    let left = 0;
    let right = nums.length - 1;
    //while left is not right
    while (left < right) {
        //get our mid point
        let mid = left + Math.floor((right - left) / 2)
    //if our num at mid is greater than our number at right, then we know our smallest number is in the right subset. left = mid + 1
        if (nums[mid] > nums[right]) {
            left = mid + 1
        } else {
            right = mid;
        }
    }

    return nums[left]
};


//Will be an array of numbers of length n. could be negative, 0, or positive. always integers. always unique. always an array of ints

//Return a single number representing the minimum element of this array
//algo must be in 0(log n) time

//Example 1:

// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.
// Example 2:

// Input: nums = [4,5,6,7,0,1,2]
// Output: 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.