// 213. House Robber II

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {

    // if (nums.length === 1) {
    //     return nums[0]
    // }
    // function helper(arr) {
        
    // let rob1 = 0;
    // let rob2 = 0;
    // for (let n of arr) {
    //     let temp = Math.max(rob1 + n, rob2)
    //     rob1 = rob2;
    //     rob2 = temp;
    // }
    // return rob2
    // }

    // let firstHouseRemoved = helper(nums.slice(1))
    // let lastHouseRemoved = helper(nums.slice(0, -1))
    // return Math.max(firstHouseRemoved, lastHouseRemoved)



    //bottom up approach

    //edgecases
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0]
    if (nums.length === 2) return Math.max(nums[0], nums[1])

    //helper function with the bottom up approach
    function helper(arr) {
        //declare a res array
        let res = [arr[0], Math.max(arr[0], arr[1])]
        //for loop
        for (let i =2; i < arr.length; i++) {
            //we either can take our current number plus our other house, or take our previous house
            res.push(Math.max(arr[i] + res[i-2], res[i-1]))
        }
        return res[res.length - 1]
    }
    //call the helper function twice, once with the first house cut, last with last house cut. this is to get rid of circle problem
 let firstHouseRemoved = helper(nums.slice(1))
    let lastHouseRemoved = helper(nums.slice(0, -1))
    return Math.max(firstHouseRemoved, lastHouseRemoved)


};

//WIll be an integer array. always a positive or 0 integer. always valid integers. always an array of ints

//Return the amount of money of each house that we can rob without alerting police

//houses are arranged in a circle. this means the first house is the neighbour of the last one

//adjacent houses have a security system and it will automatically contact the police if two adjacent houses wer ebroken into

// Example 1:

// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
// Example 2:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.