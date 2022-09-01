// Can you implement a function that will return number of words in a string?

// You have to ensure that spaces in string is a whitespace for real.

// Let's take a look on some examples:

// countWords("Hello"); // returns 1 as int
// countWords("Hello, World!") // returns 2
// countWords("No results for search term `s`") // returns 6
// countWords(" Hello") // returns 1
// // ... and so on
// What kind of tests we made for your code:

// Function have to count words and not spaces. You have to be sure that you doing it right
// Empty string has no words.
// String with spaces around should be trimmed.
// Non-whitespace (ex. breakspace, unicode chars) should be treated as a delimiter
// Doublecheck that words with chars like -, ', ` are counted right.

function countWords(str) {
    // Pretty sure I can split then get length
    //seems like I have to check whether the non space char are included first, then split based on that. then filter out whitespace
    //then get length
    //ternary. if doesnt include white space, split just based on whitespace
  
    return str.includes('﻿') ? str.split(' ').join('').split("﻿").filter(element => element !== '').length : str.split(' ').filter(element => element !== '').length
    
  }
  
  console.log(countWords("Hello﻿World"))
  
  //P: will be a string of words. might be an empty string. seems like it will always be valid though
  // R: return an integer representing the number of words in the string
  // E: 'Hello there!' => 2