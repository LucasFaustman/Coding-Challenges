// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

function hasUniqueChars(str){
    // I can split, then use every method with the index and indexof method
    
    return str.split('').every((element,index) => str.indexOf(element) === index)
  }
  
  //P: will be a string. may be a symbol or number it looks like. might be upper or lowercase letters
  //R: return a boolean representing if all elements of the string are unique
  // E: 'abcd' => true 'bcc' => false