// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    //2 hashmaps
    const hash1 = {};
    const hash2 = {};
    //for loop
    for(let i = 0; i < s.length; i++){
        //if hash1 at our current idx is not equal to hash2 at our current idx, return false
		if (hash1[s[i]] !== hash2[t[i]]){
            return false;
        }
        hash1[s[i]] = i
        hash2[t[i]] = i       
    }
    return true
};

//Will be two strings. both will contain any valid ascii character, will always be valid strings, never empty. always will be the same length to eachother

//Return a boolean true if the two strings are isomorphic or false if not.

//Two strings are isomorphic if characters in s can be replaced to get t

//all occurences of a char must be replaced with another char while perseving the order of chars. no two chars may map to the same character, but character may map to itself

//E: Input: s = "egg", t = "add"
// Output: true


//Input: s = "foo", t = "bar"
// Output: false