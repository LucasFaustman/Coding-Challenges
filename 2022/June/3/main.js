
// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

String.prototype.isUpperCase = function() {
    // your code here
  //   turn string into array using split. then use every method, conditional being every letter is uppercase
    
    return this.split('').every(letter => letter.toUpperCase() === letter)
  }
  
  // P: parameter will be string. Always will be a string
  // R: Return a boolean true or false. True if all letters are uppercase. false if not
  // E: HELLO I'M LUCAS => true hello IM LUCAS => false