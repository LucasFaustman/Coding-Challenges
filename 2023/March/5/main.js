// You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.

// There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c.

// For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
// For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).

// Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.

/**
 * @param {string} s
 * @return {string}
 */
 var replaceDigits = function(s) {

    //or I can map and get the char code + 1?
    //split, then map
    //if index is even(meaning we are on a char) just return the char
    //else, get the charcode of the previous index(the char), then add the number of our current iteration(the number of letters we go up)
    //then convert everything back to a letter using fromchar code
    //then join at end
    return s.split('').map((char,index,arr) => index % 2 !== 0 ? String.fromCharCode(arr[index-1].charCodeAt(0) + Number(char)) : char).join('')
};


//param will be a string. only will consist of lowercase eng letters and digits. digits will be in string form

//Return a new string replacing all digits

//each odd index has a number. replace that number where the num represents the number of letters past a certain letter

//for example, 'a1' would be 'ab' because b is 1 after a

//Input: s = "a1c1e1"
// Output: "abcdef"
// Explanation: The digits are replaced as follows:
// - s[1] -> shift('a',1) = 'b'
// - s[3] -> shift('c',1) = 'd'
// - s[5] -> shift('e',1) = 'f'