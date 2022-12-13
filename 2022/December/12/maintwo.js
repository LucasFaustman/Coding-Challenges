// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    //base case is 1 and 0
    if (n === 1) return 1
    if (n === 0) return 0
    //return
    return fib(n - 1) + fib(n - 2)
};


//Our param will be a positive int between 0 and 30. no funny business!
//Return an integer representing the fibonacci number. Fibonacci number is a number where each number is the sum of the two proceeding ones, starting from 0 and 1