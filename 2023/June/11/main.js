// 322. Coin Change

// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
//  var coinChange = function(coins, value) {
// //brute force
// //   //declare some sort of min value and return it
// //   //then do our recursive function including a current count, index, 
// //    // Sort coins in descending order to prioritize larger denominations
// //   coins.sort((a, b) => b - a);



// //   // Initialize minimum coin count with Infinity
// //   let minCoins = Infinity;


// //       // Start backtracking from the first coin
// //   backtrack(0, value, 0);

// //   // If no valid combination was found, return -1
// //   return minCoins === Infinity ? -1 : minCoins;






// //   function backtrack(index, remaining, count) {

// //       // Check if the result is already cached
// //     // Check if the result is already cached

// //     // Base case: amount is reached
// //     if (remaining === 0) {
// //       minCoins = Math.min(minCoins, count);
// //       return;
// //     }

// //     // Base case: exceeded amount or all coins have been considered
// //     if (remaining < 0 || index === coins.length) {
// //       return;
// //     }

// //     // Try using current coin
// //     const coin = coins[index];
// //     const maxCount = Math.floor(remaining / coin); // Maximum number of coins we can use
// //     for (let i = maxCount; i >= 0; i--) {
// //   // Explore all possible quantities of the current coin denomination
// //   // by subtracting i * coin from the remaining amount
// //   // and incrementing the count by i.
// //   backtrack(index + 1, remaining - i * coin, count + i);
// // }

// //   }

// //brute force with memoization

// };


var coinChange = function(coins, amount) { 
    let result = countCoinChange(coins, amount)
    return result === Infinity ? -1 : result
};

// Helper function to count coin change
const countCoinChange = (coins, amount, memo={}) => {
    if(amount === 0) return 0 // If amount is 0, no more coins needed
    if(amount < 0) return Infinity // If amount is negative, not possible to make change
    if(memo[amount] !== undefined) return memo[amount] // If amount has already been calculated, return memoized value

    let min = Infinity // Initialize min variable to track the minimum number of coins needed

    // Iterate over each coin
    for(let coin of coins) {
        const restAmount = amount - coin // Calculate the remaining amount after using a coin
        // Recursively call the function to calculate the number of coins needed for the remaining amount
        // Add 1 to account for the current coin being used
        min = Math.min(countCoinChange(coins, restAmount, memo) + 1, min) // Update min if a smaller number of coins is found
    }

    memo[amount] = min // Memoize the calculated value for the current amount
    return memo[amount] // Return the minimum number of coins needed for the current amount
}

//Will be 2 params. One will be an integer array coins. always an array of integers. always positive. always an integer.

//other param will be an amount. amount can be 0 or positive

//Return the fewest number of coins that we need to make up for the amount. if that amount of money cannot be made up by any combo, return -1

//we have an infinite number of each kind of coin

//Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0
