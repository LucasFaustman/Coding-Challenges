// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.


/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfTwo = function(n) {
    //basecase will be 2 or 1
    if (n === 2 || n === 1) return true
    if (n < 2) return false

    //recursive case. divide n /2

    return isPowerOfTwo(n/2)
};

//Will be an integer n. will always be an integer.might be positive or negative. no funny business.
//return a boolean representing if the integer n is a power of 2, return true, otherwise return false
//1 => true
//4 => true
//3 => false