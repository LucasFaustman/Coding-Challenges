// 198. House Robber
// Medium
// 17.9K
// 338
// Companies
// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    // Initialize variables to keep track of maximum money robbed up to the previous house and current house
    let rob1 = 0; // Maximum money robbed up to the previous house
    let rob2 = 0; // Maximum money robbed up to the current house
    
    // Iterate over each house
    for (let num of nums) {
        // Calculate the maximum amount of money that can be robbed either by robbing the current house or skipping it
        let temp = Math.max(num + rob1, rob2);
        
        // Update the variables for the next iteration
        rob1 = rob2; // Set the previous maximum money robbed to the current maximum
        rob2 = temp; // Set the current maximum money robbed to the calculated maximum
    }
    
    // Return the maximum amount of money that can be robbed without triggering the security system
    return rob2;
};

//Will be an array of nums. always will be a valid integer array. ints might be 0 or positive

//Return the maximum amount of money we can rob without alerting the police.

//We cannot rob adjacent houses.

//Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.