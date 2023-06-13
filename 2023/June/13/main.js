// 1295. Find Numbers with Even Number of Digits

// Given an array nums of integers, return how many of them contain an even number of digits.

// Constraints:

// 1 <= nums.length <= 500
// 1 <= nums[i] <= 105

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumbers = function(nums) {
    //for each method
    //keep a global tally of even digits and return at the end
    let numberOfEvenDigits = 0;

    nums.forEach(num => {
        if (num.toString().length % 2 === 0) {
            numberOfEvenDigits++
        }
    })
    return numberOfEvenDigits;
};

//Will be an array of integers. integers will always be positive integers. the array will always be valid, no funny business

//Return how many integers of our array contain an even number of digits

//Input: nums = [12,345,2,6,7896]
// Output: 2

//because 12 and 7896 are the only numbers with even number of digits(2 and 4)