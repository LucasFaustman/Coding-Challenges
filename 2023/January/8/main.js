// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

// You can either start from the step with index 0, or the step with index 1.

// Return the minimum cost to reach the top of the floor.



/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {

    //bottom up approach
    //get the length of cost
        let n = cost.length;
        //declare newarr
        let dp = []
        // for loop
        for(let i=0;i<n;i++){
            //if first 2 elements, just add elements to our new array
            if(i<2) dp[i] = cost[i]
            //else, assign new element of array to current cost + our min cost from last 2 steps of staircase
            else dp[i] = cost[i] + Math.min(dp[i-1],dp[i-2])
        }
        //return the lesser of the last 2 elements of array
        return Math.min(dp[n-1],dp[n-2])
        
    };
    
    //will be an array of numbers. each number will be an integer. always will be a positive integer. length of array will always be valid and have at least 2 elements
    //Return a number representing the min cost to reach the top floor. each number represents the cost of a step. once you pay the cost, you can either climb one or two steps
    //[10,15,20] => 15 because we can start at index 1, go up one step and we're at the end of the staircase
    //[1,100,1,1,1,100,1,1,100,1] => 6 because we start at 0, climb 2 steps to 1, climb 2 more steps to 1, climb 2 to 1, climb 1 to 1, climb 2 to 1 again, totalling 6 and avoiding the 100s