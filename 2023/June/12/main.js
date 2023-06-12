// 322. Coin Change

// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.


//Dynamic approach!!


var coinChange = function(coins, amount) { 
    //Dynamic approach!
    const dp = new Array(amount + 1).fill(Infinity) //arr tells us how many coins we need for each amount

    dp[0] = [0]; //to make 0 we need 0 coins

    for (let coin of coins) { //check each coin
        for (let i = coin; i <= amount; i++) { //iterate through entire amount from coin to value
            dp[i] = Math.min(dp[i], dp[i-coin] + 1) //update min number of needed coins
         }
    }

    return dp[amount] === Infinity ? -1 : dp[amount]
 
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