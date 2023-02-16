// You are given a 0-indexed integer array nums. In one operation, you may do the following:

// Choose two integers in nums that are equal.
// Remove both integers from nums, forming a pair.
// The operation is done on nums as many times as possible.

// Return a 0-indexed integer array answer of size 2 where answer[0] is the number of pairs that are formed and answer[1] is the number of leftover integers in nums after doing the operation as many times as possible.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var numberOfPairs = function(nums) {
    //do a hashmap
    //declare a count
    let count = 0;
    let hash = {};
    //each time we loop, check if number exists is hash. if so, add one to count and get rid of the number in hash
    //at the end, return an array that has count as answer[0], and leftovers from hash

    for (let num of nums) {
        if (hash[num]) {
            count++
            hash[num]--
        } else {
            hash[num] = 1
        }
    }
    //get number of values inside hash where key is > 0
    let leftovers = Object.values(hash).filter(val => val > 0).length
    return [count, leftovers]

};

//3,3
//2,2
//1,1
//2 leftover


//Will be a 0-indexed integer array. array will always be valid and integers might be 0 or positive

//Return an array of length 2 where answer[0] is the number of pairs that are formed and answer[1] is number of leftover integers

//Input: nums = [1,3,2,1,3,2,2]
// Output: [3,1]
// Explanation:
// Form a pair with nums[0] and nums[3] and remove them from nums. Now, nums = [3,2,3,2,2].
// Form a pair with nums[0] and nums[2] and remove them from nums. Now, nums = [2,2,2].
// Form a pair with nums[0] and nums[1] and remove them from nums. Now, nums = [2].
// No more pairs can be formed. A total of 3 pairs have been formed, and there is 1 number leftover in nums.