// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.


/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {

    //for loop

    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++
            return digits
        } else {
            digits[i] = 0
        }
    }

    digits.unshift(1)
    return digits

    
};

//Will be an integer array of digits. digits ordered from more significant to least. no leading 0's. always will be valid
//Return a new array where we add one to the number of digits.
//E:[1,2,3] => [1,2,4]
//E:[9] => [10]
//E: [9,0,9] => [9,1,0]