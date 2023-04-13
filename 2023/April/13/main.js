// 438. Find All Anagrams in a String

// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
    let res = [];
    let neededChars = {};
  
    //add anagram vals to needed chars
    for (let char of p) {
        neededChars[char] = neededChars[char] + 1 || 1; 
    }
      // initialize window pointers and the total number of chars needed to form an anagram.
  
    let left = 0;
    let right = 0;
    let count = p.length;
    //2
    //c=0
    //right is 1
  
    while (right < s.length) {
  
        // if the current char is found in p and is currently needed (meaning that its value in neededChars is bigger than 0), 
          // then decrease the count which is the total number of chars that are needed and that still haven't been found.
          if (neededChars[s[right]] > 0) count--;
  
           // decrease the needed amount for the current char and move the window's right end one step forward.
          neededChars[s[right]]--;
          right++;
          
  
    // if the count is 0, this means that there is an anagram starting at the left index so push left into the output array.
          if (count === 0) res.push(left);
          
          // at first, the window will increase its length by taking steps forward with its right end.
          // after the window length reaches p's length for the first time,
          // the window will start moving forward like a caterpillar with the left end moving first. 
          if (right - left == p.length) {
              
              // if the char left behind was a needed char, increase the total number of chars currently needed to form an anagram.
              if (neededChars[s[left]] >= 0) count++;
              
              // the lines below are the most important to understand: 
              // every time a needed char is left behind (outside the window) as the window moves forward to search the rest of the string, 
              // increment that char's value in the neededChars object (restore the need for that char for the window's future reference).
              neededChars[s[left]]++;
              left++;
          }
      }
      return res;
  };
  
  //2 params. both strings of all lowercase english letters.
  
  //Return the start indices of all p's anagrams in s. can be returned in any order
  
  //An anagram is a word of phrase formed by rearranging the letters of a different word of phrase
  
  //E :Input: s = "cbaebabacd", p = "abc"
  // Output: [0,6]
  // Explanation:
  // The substring with start index = 0 is "cba", which is an anagram of "abc".
  // The substring with start index = 6 is "bac", which is an anagram of "abc".