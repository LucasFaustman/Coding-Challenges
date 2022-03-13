// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    // P: I first want to split the string with a space. 
  // Then I can map through the array
  //   the split again for each letter, reverse, join
  //   then join the str back together as a whole with a space
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
  } 
  
  // P: String, always will be a string
  // R: Return a string that reverses each word in the original string
  // E: apple is good => doog si elppa