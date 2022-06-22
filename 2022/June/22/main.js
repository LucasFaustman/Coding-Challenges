// All Star Code Challenge #18

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:

// The first argument can be an empty string
// The second string argument will always be of length 1

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