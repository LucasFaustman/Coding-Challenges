// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// write the function isAnagram
var isAnagram = function(test, original) {
  
    //   I can just sort each string. if sorted strings don't equal eachother, return false
      let newTest = test.toLowerCase().split('').sort().join('')
      let newOriginal = original.toLowerCase().split('').sort().join('')
      
      
      return  newTest === newOriginal
    
    };
    
    // P two strings. always will be a valid string
    // R: a boolean representing if the two arguments are anagrams of eachother
    // E: 'racecar' 'carrace' => true