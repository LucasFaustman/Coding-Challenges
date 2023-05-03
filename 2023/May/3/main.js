// 326. Power of Three
// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

// Constraints:

// -231 <= n <= 231 - 1


/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
    // //basecase is 1
    // if (n === 1) {
    //     return true;
    // } else if (n === 0) {
    //     return false;
    // }
    // //divide by 3
    // return isPowerOfThree(n/3)

    while(n > 1){
        n /= 3
    }
    
    return n === 1
};


//Will be an integer. always will be an integer, might be nagative, 0, or positive integer

//Return boolean true if our n is a power of three, otherwise return false

//E:

// Input: n = 27
// Output: true
// Explanation: 27 = 33