// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    //I can try the reduce method first
    let reducedAccounts = accounts.map(account => account.reduce((acc,num) => acc + num,0))

    return Math.max(...reducedAccounts)
};

//WIll be a nested array of numbers. array will always be nested array of number,s no strings. might be negative or positive integers. might be floats.
//Return an integer representing the richest nested array. the richest refers to the largest sum
//E: [[1,2,3], [2,3,4]] = 9 because 2 + 3 + 4 is 9 which is larger than 6
//E: [[1,5],  [2,1,5], [3,4]] => 8 