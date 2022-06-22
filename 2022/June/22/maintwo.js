// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.


function strCount(str, letter){  
    //code here
    
  //  I can declare a variable holding the count
    let result = 0
    
  //   then create a for loop to loop through the string and if letter is equal to a letter in str, add to result
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
          result++
        }
    }
  //   then return the result
    return result
  }
  
  // P: Passing in two strings. First argument can be an empty string, but second string will always have atleast
  // one letter
  // R: Return a number representing the amount of occurences letter shows up in str
  // E: 'Lucas' 'L' => 1