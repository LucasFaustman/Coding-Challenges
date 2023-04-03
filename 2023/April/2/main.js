// 1636. Sort Array by Increasing Frequency
// Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

// Return the sorted array.

// Constraints:

// 1 <= nums.length <= 100
// -100 <= nums[i] <= 100

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var frequencySort = function(nums) {
    //hash map to hold our frequences

    let hash = {};

    for (let num of nums) {
        hash[num] = hash[num] + 1 || 1;
    }

    //sort twice
    //sort in ascending order first to get edge case of if 2 nums have the same frequency

    nums.sort((a,b) => b-a)
    //then sort based on frequency
    return nums.sort((a,b) => hash[a] - hash[b])
};


//Will be an array of numbs. always will be integers. might be negative or positive numbers. always will be valid

//Return a new array where the array is sorted in increasing order based on the frequency of the values. 

//if multiple values have the same freq, sort them in descresing order


// \Input: nums = [1,1,2,2,2,3]
// Output: [3,1,1,2,2,2]
// Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.