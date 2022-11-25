// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {

    //for loop from 0 to nums2.length
     for(let i = 0; i < nums2.length; i++) {
         //nums1+m, which gets us to the end of valid nums in first array, assign to nums2[i]
            nums1[i + m] = nums2[i]
        }
        //then sort at end
        nums1.sort((a, b) => a - b);
    };
    
    //4 params. two integer arrays sorted in ascending order, and 2 integers m and n, representing number of elements in nums1 and nums2. nums1.length == m+n, nums2.length is n, integers will always be valid
    //Merge nums 1 and nums2 into a single array sorted in ascending order, you arent returning anything
    //E[1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3 => [1,2,2,3,5,6]