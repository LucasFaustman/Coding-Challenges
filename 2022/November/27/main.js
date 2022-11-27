// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    //first get rid of all symbols from string using regex, then tolowercase
    let newS = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
    //then for loop getting middle
    for (let i = 0; i < newS.length/2; i++) {
        if (newS[i] !== newS[newS.length - i - 1]) {
            return false;
        }
    }
    return true;
};

//Will be a string. string might be upper or lowercase. might include symbols or spaces. 
//Return a boolean representing if the string is a palindrome or not without the symbols
//E: "A man, a plan, a canal: Panama" => true because "amanaplanacanalpanama" is a palindrome.
//"race a car" => false => because raceacar is not a palindrome