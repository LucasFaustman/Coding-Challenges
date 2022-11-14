// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    //I think i can use a hashmap here then return the object with a value of 1

    let newObj = {}
    for (let i = 0; i < nums.length; i++) {
        if (newObj[nums[i]]) {
            newObj[nums[i]]++
        } else 
        newObj[nums[i]] = 1
    }
//Object.keys to get values, then find to find the key that has a match to 1
return Object.keys(newObj).find(key => newObj[key] === 1);
};

//Will be an array of numbers. will be non empty. each element in array appears twice except for one element which only appears once
//Return the number which only shows up once
//[4,1,2,1,2] => 4
