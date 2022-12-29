// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

/**
 * @param {number[]} nums
 * @return {number}
 */
 var sumOfUnique = function(nums) {
    //hash
    let hash = {}

    //for loop
    for (let i= 0; i < nums.length; i++) {
        hash[nums[i]] = hash[nums[i]] + 1 || 1
    }
    //return using object.entries, filter, then reduce to get sum
    return Object.entries(hash).filter(pair => pair[1] === 1).reduce((acc,entry) => acc + Number(entry[0]),0 )
};

//Will be an array of numbers. nums will always be valid, and always positive!
//Return a number representing the number of unique elements that appear exactly once in the array
//E: [1,2,2,3] => 4 because 1 + 3 = 4
//E: [1,1,1,1] => 0 because no unique elements