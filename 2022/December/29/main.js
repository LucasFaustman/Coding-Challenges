// Given a string s consisting of lowercase English letters, return the first letter to appear twice.

// Note:

// A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
// s will contain at least one letter that appears twice.

/**
 * @param {string} s
 * @return {character}
 */
 var repeatedCharacter = function(s) {
    //hashmap
    let hash = {}
    //for loop
    for (let i= 0; i < s.length; i++) {
        if (!hash[s[i]]) {
            hash[s[i]] = 1
        } else {
            return s[i]
        }
    }
    
};
//Will be a string. always will consist of lowercase english letters. always will be valid, no funny business!
//Return a letter representing the first letter to appear twice in our string
//E: "aabbcc" => 'a'
//E: "fidsktt" => 't'