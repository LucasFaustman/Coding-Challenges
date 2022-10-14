// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

 var isPalindrome = function(x) {
    //simple return statement. split x, reverse, then join and parse. if that is equal to x. return true
    //seems like negatives will never be correct because the - always is at the end

    return x === parseInt(x.toString().split('').reverse().join(''))
};

//Will be an integer. unclear if always valid, positive, might be 0, might be negative
//Return a boolean representing if integer is a palindrome when it reads same backward and forward
// 121 => true
// 221 => false