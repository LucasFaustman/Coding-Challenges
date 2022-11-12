// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    //i can trim then split (' ')

    let splittedString = s.trim().split(' ')
    return splittedString[splittedString.length - 1].length
};

//Will be a string of english letters and spaces. always will be at least one word.
//Return an integer representing the last word of the strings length
//E: "Hello World" => 5
//"     fly me   to    the moon  " => 4 because moon is 4 letters