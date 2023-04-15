// 2540. Minimum Common Value
// Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.

// Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.

// Constraints:

// 1 <= nums1.length, nums2.length <= 105
// 1 <= nums1[i], nums2[j] <= 109
// Both nums1 and nums2 are sorted in non-decreasing order.


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var getCommon = function(nums1, nums2) {
    //set maybe
    let nums1Set = new Set(nums1);


    //then go through nums2
    for (let num of nums2) {
        if (nums1Set.has(num)) {
            return num
        }
    }
    return -1
};

//WIll be two integer arrays sorted in ascending order. always will be valid. 

//Return the minimum integer common in both arrays. if no min integer, return -1

//E:Input: nums1 = [1,2,3], nums2 = [2,4]
// Output: 2
// Explanation: The smallest element common to both arrays is 2, so we return 2.