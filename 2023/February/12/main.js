// There is a function signFunc(x) that returns:

// 1 if x is positive.
// -1 if x is negative.
// 0 if x is equal to 0.
// You are given an integer array nums. Let product be the product of all values in the array nums.

// Return signFunc(product).


/**
 * @param {number[]} nums
 * @return {number}
 */
 var arraySign = function(nums) {
    //first get product using .reduce

    let product = nums.reduce((acc,num) => acc * num,1)
    //then conditional


    if (product > 0) {
        return 1
    } else if (product === 0 || !product) {
        return 0
    } else {
        return -1
    }
};

//Will be an array of integers. will always be a valid array. sometimes integers might be negative or positive

//Return 1 if the product of all values is positive, 0 if equal to 0, or -1 if negative

//E:

// Input: nums = [-1,-2,-3,-4,3,2,1]
// Output: 1
// Explanation: The product of all values in the array is 144, and signFunc(144) = 1