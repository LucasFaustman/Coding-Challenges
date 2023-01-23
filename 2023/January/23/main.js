// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.



/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
    //we can filter both sides to get evens and odds, then concat at end

    let evenNums = nums.filter(num => num % 2 === 0)

    let oddNums = nums.filter(num => num % 2 !== 0)

    return evenNums.concat(oddNums)
};

//Will be an array of numbers. always will be an array - numbers will all be positive integers

//return an array where all the even number are at the beginning of the array followed by odds

//[[3,1,2,4]] => [2,4,3,1]