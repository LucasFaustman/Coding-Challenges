// 2149. Rearrange Array Elements by Sign

// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

// You should rearrange the elements of nums such that the modified array follows the given conditions:

// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were present in nums is preserved.
// The rearranged array begins with a positive integer.
// Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var rearrangeArray = function(nums) {
    //hold positives and negatives in 2 seperate filtered arrays
    //2 points. for loop through nums. if i % 2 === 0, make sure number is pos, if not, negative
    let positives = nums.filter(num => num > 0)
    let negatives = nums.filter(num => num < 0)
    //declare 2 points, positive and negative pointer
    let posPointer = 0;
    let negPointer = 0;
    let res = [];
    //for loop
    for (let i= 0; i < nums.length; i++) {
        if (i % 2 === 0) { //if we are at a pos position, push our pos value and iterate pos pointer
            res.push(positives[posPointer])
            posPointer++
        } else if (i % 2 !== 0) { //same thing for negative
            res.push(negatives[negPointer])
            negPointer++
        }
    }
    return res;
};

//Will be an array of nums. will be even length. will be positive or negative ints. i dont believe will ever be 0. always valid

//Return the array where elements are rearranged in this order:

// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were present in nums is preserved.
// The rearranged array begins with a positive integer.

// Input: nums = [3,1,-2,-5,2,-4]
// Output: [3,-2,1,-5,2,-4]
// Explanation:
// The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].
// The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
// Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do not satisfy one or more conditions.  