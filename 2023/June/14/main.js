// 2574. Left and Right Sum Differences

// Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

// answer.length == nums.length.
// answer[i] = |leftSum[i] - rightSum[i]|.
// Where:

// leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
// rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
// Return the array answer.

// Constraints:

// 1 <= nums.length <= 1000
// 1 <= nums[i] <= 105

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var leftRightDifference = function(nums) {
    //a similar product of array expect itself approach

    let answer = new Array(nums.length).fill(0)
    //get left side
    let sumBefore = 0;
    for (let i= 0; i < nums.length; i++) {
        answer[i] += sumBefore;
        sumBefore += nums[i]
    }
    //get right side but minus the difference between right and left and use math.abs
    let sumAfter = 0;
    for (let i = nums.length - 1; i >=0 ;i--) {
        answer[i] = Math.abs(answer[i] - sumAfter);
        sumAfter += nums[i]
    }

    return answer;
};

//WIll be given an integer array. the array will always be valid and integers will always be positive

//Return a new array answer where nums.length === answer.length
//answer[i] = leftsum[i] - rightsum[i]

//leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
// rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
