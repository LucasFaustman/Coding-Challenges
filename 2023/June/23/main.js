// 561. Array Partition

// Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

// Constraints:

// 1 <= n <= 104
// nums.length == 2 * n
// -104 <= nums[i] <= 104

/**
 * @param {number[]} nums
 * @return {number}
 */
 var arrayPairSum = function(nums) {

    //sort the array in decreasing order
    nums.sort((a,b) => b - a)

    //need a way to split into pairs
    //declare a res variable
    let res = 0;

    //for loop
    //iterate 2 each time

    for (let i= 1; i < nums.length; i+=2) {
        let min = Math.min(nums[i], nums[i-1])
        res += min
    }


    return res;
};

//Will be an array of nums. nums will always be integers, might be pos negative or 0. nums array will always have a valid length.

//Return the maximized sum of the array...

//we need to group into n pairs
//nums.length === 2 * n

//such that the sum of min(a1,b1) for all i's is maximized

// Input: nums = [1,4,3,2]
// Output: 4
// Explanation: All possible pairings (ignoring the ordering of elements) are:
// 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
// 2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
// 3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
// So the maximum possible sum is 4.

// Input: nums = [6,2,6,5,1,2]
// Output: 9
// Explanation: The optimal pairing is (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.