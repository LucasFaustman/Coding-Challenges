// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.



/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    //get length of nums / 2
    let numsLengthDividedByTwo = nums.length / 2
    //hash
    let newObj = {}
    //for loop
    for (let i =0; i < nums.length; i++) {
        //if num exsist in object, add 1 to it
        if (newObj[nums[i]]) {
            newObj[nums[i]]++
            //else assign to 1
        } else {
            newObj[nums[i]] = 1
        }

    }

    //another for loop that goes through obj and return if the value is > nums.length / 2

    for (let num in newObj) {
        if (newObj[num] > numsLengthDividedByTwo) {
            return num
        }
    }
};

//Will be an array of numbers. No funny business, always will be an array of numbers. might be negative
//Return an inteter representing the majority element. the majority element is an element that appears more than nums.length/2 times in the array
//E: [3,2,3] => 3, because 3 shows up twice. n/2 is 1.5 and 3 shows up twice, this being the majority number