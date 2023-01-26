// Given an integer n, return the number of strings of length n that consist only of vowels (a, e, i, o, u) and are lexicographically sorted.

// A string s is lexicographically sorted if for all valid i, s[i] is the same as or comes before s[i+1] in the alphabet.


/**
 * @param {number} n
 * @return {number}
 */
 var countVowelStrings = function(n) {    
    //declare our result
    let res = 0
    //then use a helper function. this function will count the number of valid strings in length n
    helper(n, 0)

    function helper(n, startIdx) { 
        // base case
        if (n === 0) {
            res++
            return
        }

        // recursive case
        for (let i = startIdx; i < 5; i++) {
            helper(n - 1, i)
        }
    }

    return res
};

//Will be a positive integer. will always be a positive integer, no other inputs

// Return the number of strings of length n that consist only of vowels and are lexicographically sorted.

//a string is lexicographically sorted if all vaid i,[si] is the same or comes before s[i+1] in alphabet