// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:

// If either input is an empty string, consider it as zero.

// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

function sumStr(a,b) {
    //   first need to make a conditional that says if no length to both params, return empty string
    //   Then I can add a and b by converting each to a number first, then adding, then converting final result back to str
      
      if (!a.length && !b.length) {
        return '0'
      } else 
        return (Number(a) + Number(b)).toString()
      
    }
    
    // P will be two strings representing nums. Can be empty strings
    // R: Return a string of a num representing the sum of the two parameters
    // E '2','3' => '5'