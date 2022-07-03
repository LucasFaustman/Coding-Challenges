// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

function plural(n) {
    //   I can possibly just use a simple return statement asking if n isn't 1, return true
      
      return n !== 1
    }
    
    // P: will be a number. might be negative or positive I guess
    // R: return a boolean representing if number needs a plural or not
    // E: 2 => true 1 => false