// Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
 var twoOutOfThree = function(nums1, nums2, nums3) {

    //  let newArr = []

    //     //for loop through nums2 then nums2. if nums2.includes(nums1[i]) || nums3.includes(nums1[i]), add to arr

    //     for (let i= 0; i < nums1.length; i++) {
    //         if ((nums2.includes(nums1[i]) || nums3.includes(nums1[i])) && !newArr.includes(nums1[i])) {
    //             newArr.push(nums1[i])
    //         }
    //     }

    //     for (let i= 0; i < nums2.length; i++) {
    //         if ((nums1.includes(nums2[i]) || nums3.includes(nums2[i])) && !newArr.includes(nums2[i])) {
    //             newArr.push(nums2[i])
    //         }
    //     }
    //     return newArr      //first declare a new arr

     
//set
    let answer = new Set()
    //create a first arr set, then loop and add to set
    let nums1Set = new Set()
    for (let num of nums1) {
        nums1Set.add(num)
    }
    //do same thing for 2, but if theres an answer in both set 1 and 2, add to our answer
    
    let nums2Set = new Set()
    for (let num of nums2) {
        nums2Set.add(num)
        if (nums1Set.has(num)) {
            answer.add(num)
        }
    }
    //same thing from 2 to 3, loop through each num and see if theres a match in either set 1 or 2
    for (let num of nums3) {
        if (nums1Set.has(num) || nums2Set.has(num)) {
            answer.add(num)
        }
    }

    //return our set in an array with duplicates removed
    
    return  [...answer]
    
    
    };
    
    //Will be 3 params. 3 arrays of integers. always will have a valid length and valid array. numbers will always be positive integers!
    
    //Return an array containing all the values that are present in at least two out of the three arrays in any order
    
    //E: Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
    // Output: [3,2]
    // Explanation: The values that are present in at least two arrays are:
    // - 3, in all three arrays.
    // - 2, in nums1 and nums2.