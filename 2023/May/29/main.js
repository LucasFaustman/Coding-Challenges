// 3. Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

var lengthOfLongestSubstring = function (s) {

    let newSet = new Set(); //declare a set to hold our chars
    let left = 0; //declare a left variable so that we can move our window
    let maxSubStr = 0; //maxsubstr count and then return at end
    
    //for loop
    for (let i= 0; i < s.length; i++) {
        //while our set has our duplicate char, delete it from the left first, and move our window up one
        while (newSet.has(s[i])) {
            newSet.delete(s[left])
            left++
        }   
    
        newSet.add(s[i]) //add our curr char to the window and set
        maxSubStr = Math.max(maxSubStr, i - left + 1) //reassign our max substr if necessary if our current windows length is larger than our curr max
    }
    
    return maxSubStr;
    
    }
    //Will be a string. only will contain letters, digits,symbolbs, spaces
    //Return an integer representing the longest substring without repeating characters
    //E: 'abcabcabc' => 3 because of abc