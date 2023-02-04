// Given an array of integers nums, half of the integers in nums are odd, and the other half are even.

// Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

// Return any answer array that satisfies this condition.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParityII = function(nums) {
    //cant i filter both arrays, then do a for loop and add number from each to new array

    // let evenNums = nums.filter(num => num % 2 === 0)
    // let oddNums = nums.filter(num => num % 2 !== 0)

    // let newArr = []

    // for (let i= 0; i < evenNums.length; i++) {
    //     newArr.push(evenNums[i], oddNums[i])
    // }
    // return newArr


    //a one loop solution
    let res = []
    let evenIndex = 0;
    let oddIndex = 1;

    for (let i= 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            res[evenIndex] = nums[i]
            evenIndex += 2
        } else {
            res[oddIndex] = nums[i]
            oddIndex += 2
        }
    }
    return res
};

//Will be an arrayof integers. will always be an array of integers. no funny business! integers will always be positive. always will be an even length. half integers will be even, other half odd

//Sort the original array whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even

//E: Input: nums = [4,2,5,7]
// Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.