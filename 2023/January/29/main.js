// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
 var findDifference = function(nums1, nums2) {
    // //I believe we can do 2 for loops here

    // // //declare a result arr
    // let result = [[],[]]

    // for (let i= 0; i < nums1.length; i++) {
    //     //if nums2 doesnt include our nums1 num, and its not a duplicate currently in result, push to first index of result
    //     if (!nums2.includes(nums1[i]) && !result[0].includes(nums1[i])) {
    //         result[0].push(nums1[i])
    //     }
    // }

    // for (let i= 0; i < nums2.length; i++) {
    //     if (!nums1.includes(nums2[i]) && !result[1].includes(nums2[i])) {
    //         result[1].push(nums2[i])
    //     }
    // }
    // return result


    //we can get a solution using sets
    //convert our arrays to sets, then delete any number present in other array

    let answer1 = new Set(nums1)
    nums2.forEach(num => answer1.delete(num))


    let answer2 = new Set(nums2)
    nums1.forEach(num => answer2.delete(num))

    return [[...answer1], [...answer2]]



    
};

//2 parameters. both will be array of integers, num1 and nums2. always will be array of integers, no funny business! might be negative or postiive

//Return an array of arrays, where the first array is the list of all distinct ints in nums1 which are not present in nums2, and answer[1] is a list of all distinct ints in nums2 where are not present in nums1

//Input: nums1 = [1,2,3], nums2 = [2,4,6]
// Output: [[1,3],[4,6]]
// Explanation:
// For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
// For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].