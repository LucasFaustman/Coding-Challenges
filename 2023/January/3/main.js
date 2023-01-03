// Given an integer n, return true if it is a power of four. Otherwise, return false.

// An integer n is a power of four, if there exists an integer x such that n == 4x.

/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfFour = function(n) {
    //basecases. if n is 4 or 1, return true. else return false if n < 4
    if (n === 4 || n === 1) return true
    if (n < 4) return false
    //recursive case, divide n by 4
    return isPowerOfFour(n/4)
   };
   
   //WIll be an integer. Will always be an integer, might be negative or positive
   //Return a boolean representing if the integer is a power of 4, otherwise false
   //16=> true, because 2**4 if 16
   //5 => false
   //1 => true