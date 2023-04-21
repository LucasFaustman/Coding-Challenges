// 349. Intersection of Two Arrays

// Companies
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    // //first define the res, then return it
    // let res = [];

    // //for loop

    // for (let i = 0; i < nums1.length; i++) {
    //   if (nums2.includes(nums1[i]) && !res.includes(nums1[i])) {
    //     res.push(nums1[i])
    //   }
    // }

    // return res;


    //set
    //declare a first set
    let set1 = new Set(nums1)
    //then a resulting set
     let intersectionSet = new Set();
    //for each num of set1, if nums2 has it, then add to our resuling array
    for (let num of set1) {
        if (nums2.includes(num)) {
            intersectionSet.add(num);
        }
    }

    return [...intersectionSet];
};

//Will be two integer arrays. always will be valid integer array. will never be negative

//Return an array of their intersection. each element in result must be unique and we can return the result in any order

//Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]