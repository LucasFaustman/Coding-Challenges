// 90. Subsets II

// Given an integer array nums that may contain duplicates, return all possible 
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
    //Very similar approach to first subsets

    //result
    let res = [];


    //we have to sort array to make sure algo works, espicially the duplicate logic

    nums.sort()
    
    //dfs function
    function dfs(i,subset) {
        //base case
        if (i > nums.length - 1) {
            res.push(subset.slice())
            return;
        }
        //recursive case
        //take the number
        subset.push(nums[i])
        dfs(i+1, subset)

        //dont take
        subset.pop()
        //get rid of duplicates!
        while (i < nums.length - 1 && nums[i] === nums[i+1]) {
            i++
        }
        //then dont take number
        dfs(i+1, subset)
    }

    dfs(0,[])

  return res;
};

//Given an integer array. may contain duplicates. always an array of ints. array will always be valid. might be negative, 0, or positive

//Return all possible subsets(as an array) of our param. The solution set MUST NOT contain duplicate sets. can be returned in any order

//Input: nums = [1,2,2]
//Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]