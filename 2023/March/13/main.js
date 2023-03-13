// 704. Binary Search
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Constraints:

// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    //declare a low and high variable
    let low = 0;
    let high = nums.length - 1;
    while (low < high) {
        //declare a middlepoint
        //right/upper mid middlepoint so no infinite loop
        let midPoint = low + Math.floor((high - low +1) / 2)
        //if our middpointer is greater than our target, then reassign our high to mid point - 1
        if (nums[midPoint] > target) {
            high = midPoint - 1;
            //if midpoint is less than our target, reassign our low to our midpoint
        } else {
            low = midPoint;
        }
    }
    //at the end, if our low is equal to our target, return i. if not return -1
    return nums[low] == target ? low : -1 ;
};


//Will be 2 params. One will be an array of integers sorted in ascending order. array will always be valid and integers will always be integers and unique.
//second param will be a single integer

//Return (in 0logn time), the index in which target exists. if doesnt exist, return -1

//E:Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4