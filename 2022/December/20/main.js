// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    // //We can start with a quadratic
    // //max profit
    // let maxProfit = 0
    // //outer loop representing buying
    // for (let i= 0; i < prices.length; i++) {
    //     //inner representing sell date
    //     for (let j = i; j < prices.length; j++) {
    //         if (i !== j && prices[j] - prices[i] > maxProfit)
    //         maxProfit = prices[j] - prices[i]
    //     }
    // }

    // return maxProfit


    //sliding glass solution
    let left = 0//buy date
    let right = 1//sell date
    let maxProfit = 0

    //while our right index < our total length of prices
    while (right < prices.length) {
        //if our buying price is less than selling
        if (prices[left] < prices[right]) {
            //get profit and see if its bigger than our max profit
            let profit = prices[right] - prices[left]
            maxProfit = Math.max(maxProfit, profit)
            //if our buy price is greater than or equal to our sell price, assign our buy price to our sell price
        } else {
            left = right
        }
        //increase sell by one
        right++
    }
    return maxProfit
};

//Will be an array of numbers. will always be positive integers representing prices
//Return the maxiumum profiut you can achieve. We choose a single day to buy the stock, then a different day in the future to sell the stock
//[7,1,5,3,6,4] => 5, because if we buy at day 2(1), then sell on day 5(6), we get 5 bucks! our max profit