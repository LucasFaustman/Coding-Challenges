// 77. Combinations
// Medium
// 6.2K
// 189
// Companies
// Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

// You may return the answer in any order.

// Constraints:

// 1 <= n <= 20
// 1 <= k <= n

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    //res and return
    let res = [];
    dfs(1, [])
    return res;

    //dfs function
    function dfs(index, subset) {
        //base case
        if (subset.length === k) {
            res.push(subset.slice());
            return;
        }

        //loop for recursive case
        for (let i = index; i <= n; i++) {
            subset.push(i) //push our current i to explore all possibility
            dfs(i+1,subset)
            subset.pop() //pop our current i to move onto the next i and explore more possibilities
        }

    }
};


//Will be 2 integers. n and k. n will always be greater than or equal to 1, less than or equal to 20

//k will always be greater than or equal to 1 and less than or equal to k

//Return all possible combinations of k numbers chosen from range of 1 to n

//Input: n = 4, k = 2
// Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
// Explanation: There are 4 choose 2 = 6 total combinations.
// Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.