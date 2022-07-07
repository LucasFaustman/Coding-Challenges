// Palindrome strings
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.


function isPalindrome(line) {
 

    //   I first need to make sure that the parzam is a string. i can use a conditional
    //   then return a statement that I can use the split reverse join method to see if its equal
      
      return line.toString() === line.toString().split('').reverse().join('')
    //   then see if
    }
    
    //  P: will be a string or a number
    // R: return a boolean representing if the boolean is a palindrome or not
    // E: racecar => true