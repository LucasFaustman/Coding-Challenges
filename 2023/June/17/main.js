// 496. Next Greater Element I

// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

// Constraints:

// 1 <= nums1.length <= nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 104
// All integers in nums1 and nums2 are unique.
// All the integers of nums1 also appear in nums2.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
    //brute force method
    for (let i= 0; i < nums1.length; i++) {
        //get index of nums1[i] in nums2
        let index = nums2.indexOf(nums1[i])
        //get our current value
        let currVal = nums1[i]
        //loop through nums2 starting at our index
        for (let j = index; j < nums2.length; j++) {
            //if we find the next greatest number, reassign nums1[i] and break
            if (nums2[j] >currVal) {
                nums1[i] = nums2[j];
                break;
            }
        }
        //if we dont find a next biggest, reassign to -1
        if (nums1[i] === currVal) {
            nums1[i] = -1;
        }
    }
    return nums1;
};

//WIll be 2 arrays of integers.both arrays will always be arrays. integers might be positive or 0.

//all ints in nums1 and nums2 are unique

//all ints of integers of nums1 must appear in nums2

//For each i, find the j such that nums1[i] === nums2[j] and determine the next greatest elemetn of nums2[j] in nums2. if no greater element, then answer should be -1

//Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.