// Given a 0-indexed integer array nums, find the leftmost middleIndex (i.e., the smallest amongst all the possible ones).

// A middleIndex is an index where nums[0] + nums[1] + ... + nums[middleIndex-1] == nums[middleIndex+1] + nums[middleIndex+2] + ... + nums[nums.length-1].

// If middleIndex == 0, the left side sum is considered to be 0. Similarly, if middleIndex == nums.length - 1, the right side sum is considered to be 0.

// Return the leftmost middleIndex that satisfies the condition, or -1 if there is no such index.


/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMiddleIndex = function(nums) {
    // //Im thinking I can keep a running score of each side through the use of a for loop, slice, and reduce

    // for (let i= 0; i < nums.length; i++) {
    //     //slice at 0 to i+1, reduce, then compare to slice at i, reduce
    //     if (nums.slice(0,i+1).reduce((acc,num) => acc + num,0) == nums.slice(i).reduce((acc,num) => acc + num,0)) {
    //         return i 
    //     } else if (i === nums.length - 1) { //if no middle index and we get to the end of the loop, return -1
    //         return -1
    //     }
    // }

    //linear solution

    let sum = nums.reduce((acc,num) => acc + num,0)
    let leftSum = 0

    for (let i= 0; i < nums.length; i++) {
        if (sum - nums[i] - leftSum === leftSum) {
            return i
        }
        leftSum += nums[i]
    }
    return -1
};

//Will be an array of integers. will always be a valid array. integers might be positive or negative. always integers

//Return a number representing the left most middle index that satisfies the below condition:

//middle index is an index where nums[0] + nums[1] +... + nums[middleIndex - 1]

//===

//nums[middleIndex+1] + nums[middleIndex+2] ...

//If middle index is 0, left side is condersidered to be 0. if middle index == nums.length - 1, right side is 0



//Input: nums = [2,3,-1,8,4]
// Output: 3
// Explanation: The sum of the numbers before index 3 is: 2 + 3 + -1 = 4
// The sum of the numbers after index 3 is: 4 = 4