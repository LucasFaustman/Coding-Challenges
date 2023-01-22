// Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findGCD = function(nums) {
    //to get highest and lowest, we can use math.max and math.min

    let maxNum = Math.max(...nums)
    let minNum = Math.min(...nums)

    //then for loop from 0 to max and see if iterator goes into max and min. if so and bigger than max number, assign max number to iterator

    // let maxDivisor = 1

    // for (let i= 0; i <= maxNum; i++) {
    //     if (maxNum % i === 0 && minNum % i === 0 && i > maxDivisor) {
    //         maxDivisor = i
    //     }
    // }

    // return maxDivisor

    //start from end to get max right away

    for (let i= maxNum; i >= 0; i--) {
        if (maxNum % i === 0 && minNum % i === 0 ) {
            return i
        }
    }

    
};

//Will be an integer array. always will be an array of positive integers! no funny business here

//Return the greatest common divisor of the smallest number and largest numbers. 

//greatest common divisor of two numbers is the largest number that evenly divides both numbers

//Input: nums = [2,5,6,9,10]
// Output: 2
// Explanation:
// The smallest number in nums is 2.
// The largest number in nums is 10.
// The greatest common divisor of 2 and 10 is 2.