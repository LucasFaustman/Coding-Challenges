// 374. Guess Number Higher or Lower
// We are playing the Guess Game. The game is as follows:

// I pick a number from 1 to n. You have to guess which number I picked.

// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

// You call a pre-defined API int guess(int num), which returns three possible results:

// -1: Your guess is higher than the number I picked (i.e. num > pick).
// 1: Your guess is lower than the number I picked (i.e. num < pick).
// 0: your guess is equal to the number I picked (i.e. num == pick).
// Return the number that I picked.

// Constraints:

// 1 <= n <= 231 - 1
// 1 <= pick <= n

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
 var guessNumber = function(n) {
    //binary search
    let low = 1;
    let high = n;
    //while low <= high, because the highest number might be the guess
    while (low <= high) {
        //get our mid
        let mid = low + Math.floor((high - low) / 2)
        //call our guess api. if it's -1, we know mid is higher, thus reassigning high to mid
        if (guess(mid) === -1) {
            high = mid
            //if number is lower than mid, reassign low to mid + 1
        } else if (guess(mid) === 1) {
            low = mid + 1
            //if our mid is equal to number they picked, return mid
        }  else {
            return mid
        }
    }
};

//WIll be a number. will be positive number. integer, not a float

//Return the number that was picked. they pick a number between 1 to n. we need to guess the number that they picked!


//Input: n = 10, pick = 6
// Output: 6