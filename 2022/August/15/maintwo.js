// Create a function that takes a string and an integer (n).

// The function should return a string that repeats the input string n number of times.

// If anything other than a string is passed in you should return "Not a string"

var repeatIt = function(str, n) {
  
  
    //first need to check if str is a str
    //i can use a ternary. if string, return str.repeat(n)
    return typeof str === 'string' ? str.repeat(n) : 'Not a string'
  
    }
  
  //P: Will be 2 params. one will be a string, other will be an ineteger. might not be a string, but will always be an integer
  // R: return a string representing the string repeated n number of times
  //E: 'Hi', 2 => 'HiHi'