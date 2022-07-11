// Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

function getChar(c){
    // ...
  //   I can probably jyst use charcodeat?
  //   Upon googling, the method to switch from number to string is fromcharcode
    return String.fromCharCode(c)
  }
  
  // P integer. will always be an integer
  // R: a string with one character that represents the asc11 value of the number
  // E: 65 => A