// 2164. Sort Even and Odd Indices Independently
// You are given a 0-indexed integer array nums. Rearrange the values of nums according to the following rules:

// Sort the values at odd indices of nums in non-increasing order.
// For example, if nums = [4,1,2,3] before this step, it becomes [4,3,2,1] after. The values at odd indices 1 and 3 are sorted in non-increasing order.
// Sort the values at even indices of nums in non-decreasing order.
// For example, if nums = [4,1,2,3] before this step, it becomes [2,1,4,3] after. The values at even indices 0 and 2 are sorted in non-decreasing order.
// Return the array formed after rearranging the values of nums.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortEvenOdd = function(nums) {
    //get an even and odd array then sort

    let evens = nums.filter((element,idx) => idx % 2 === 0).sort((a,b) => a - b)
    let odds = nums.filter((element,idx) => idx % 2 !== 0).sort((a,b) => b - a)

    //for loop
    let evenI = 0;
    let oddI = 0;
    for (let i= 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            nums[i] = evens[evenI++]
        } else {
            nums[i] = odds[oddI++]
        }
    }
    return nums;
};

//Will be an integer array. integers will all be positive. always will be a valid positive integer array

//Return a new array where all the values of nums...

//odd inices are sorted in non increasing order(desc)

//even indices are sorted in asc order

//Input: nums = [4,1,2,3]
// Output: [2,3,4,1]
// Explanation: 
// First, we sort the values present at odd indices (1 and 3) in non-increasing order.
// So, nums changes from [4,1,2,3] to [4,3,2,1].
// Next, we sort the values present at even indices (0 and 2) in non-decreasing order.
// So, nums changes from [4,1,2,3] to [2,3,4,1].
// Thus, the array formed after rearranging the values is [2,3,4,1].