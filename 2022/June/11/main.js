// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    // I can probably create a simple === statement, comparing the string to string.reverse
  //   also case insenstive so I need to lowercase everything
    return x.toLowerCase() === x.toLowerCase().split('').reverse().join('')
  }
  
  // P: Will always be a string. might be empty though!
  // R: Return a boolean representing if a string is palindrome or not
  // E: racecar => true ; lucas => false