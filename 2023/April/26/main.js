// 383. Ransom Note
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    //hash map to get magazine letters
    let magazineHash = {};

    for (let char of magazine) {
        magazineHash[char] = magazineHash[char] + 1 || 1
    }

    //for loop to check values in hash
    for (let i= 0; i < ransomNote.length; i++) {
        if (!magazineHash[ransomNote[i]]) {
            return false;
        } else {
            magazineHash[ransomNote[i]]--
        }
    }
    return true;
};

//Will be 2 params. One will be a string, other a string. both will always be valid strings. always will consist of lowercase english letters

//Return aboolean true if randomnote can be constructed by using letters from magazine and false if otherwise

//each letter in magazine can only be used once in ransom note


//E: 

// Input: ransomNote = "a", magazine = "b"
// Output: false