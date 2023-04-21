// 350. Intersection of Two Arrays II
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
    //hash and array
    let hash1 = {}
    let result = [];

    //for each num in nums 1, add to hash or add 1 to current
    for (let num of nums1) {
        hash1[num] = hash1[num] + 1 || 1
    }
    //for each num of nums2
    for (let num of nums2) {
        //if theres a match in our obj
        if (hash1[num]) {
            //push result to num, and iterate hash down 1
             result.push(num);
            hash1[num]--;

        }
    }
    return result;
};

//Will be 2 integer arrays. will always be two integer arrays!

//Return an array representing the intersection of the two arrays. each element in result must apprear as many times as its shown in both arrays. in any order

//E

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]