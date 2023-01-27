// You are given a 0-indexed integer array nums and a target element target.

// A target index is an index i such that nums[i] == target.

// Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var targetIndices = function(nums, target) {

    //first sort the array

    let sortedNums = nums.sort((a,b) => a - b)

    //then create newarr
    let newArr = []
    //for loop
    for (let i= 0; i < sortedNums.length; i++) {
        //if number in arr is equal to target, push to arr
        if (sortedNums[i] === target) {
            newArr.push(i)
            //if we got all the numbers that are equal to target, and the next number is not equal to target, return new arr
        } else if (sortedNums[i-1] === target && sortedNums[i] !== target) {
            return newArr
        }
    }
    return newArr
};

//2 parameters here. one will be an array of numbers. always will be positive integers, and always will be a valid array. 2nd parameter will be a a positive integer

//we want to return an array of all the target indices of nums after sorting nums in increading order. if no matches, return an empty list

//Input: nums = [1,2,5,2,3], target = 2
// Output: [1,2]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The indices where nums[i] == 2 are 1 and 2.