// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

/**
 * @param {number} n
 * @return {boolean}
 */

 var isHappy = function(n) {
    //cache to save our values. if infinite loop, then cached value will show up
     let cache = {}
    //recursion

//while n isnt 1 and there isnt a match in cache
while (n!== 1 && !cache[n]) {
    //add to cache, run sum of squares function
    cache[n] = true
    n = sumOfSquares(n) 
}
//if n is 1, return true, else return false
return n === 1 ? true : false

};

function sumOfSquares(num) {
    //turn number into string, split, then map and reduce to get sum of squares

    return num.toString().split('').map(number => Number(number)**2).reduce((acc,num) => acc + num,0)
}

//Will be an integer. always will be a positive integer. never a symbol, string, or invalid input
//Return a boolean representing true if the number is happy, false if not
//A happy number is a number where we replace each number by the sum of the square of its digits
//repeat process until number equals 1, or false if it loops endlessly
//E 19 => true because
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1