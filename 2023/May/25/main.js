// 2553. Separate the Digits in an Array

// Given an array of positive integers nums, return an array answer that consists of the digits of each integer in nums after separating them in the same order they appear in nums.

// To separate the digits of an integer is to get all the digits it has in the same order.

// For example, for the integer 10921, the separation of its digits is [1,0,9,2,1].

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var separateDigits = function(nums) {
    //map through array, convert number to string, split, then map and convert back to number, then flatten array at end

    // return nums.map(num => num.toString().split('').map(num => Number(num))).flat()

    //one liner, join numbers array. convert to array and use second argument to convert to an array of numbers

    return Array.from(nums.join(''), Number) 
    
};

//Will be an array of numbs. always will be a valid array of numbers. Each number will be positive integer. never a float

//Return an array(new array) that consists of the digits of each integer in numbs after seperating them in the same order they appear in the og array

//Example

//10921 => [1,0,9,2,1].