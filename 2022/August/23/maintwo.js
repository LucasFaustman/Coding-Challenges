// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(a){
  
    //i can use map. if String.fromCharCode at is equal to a,e,i,o,u, return a,e,i,o,u
    
    return a.map(element => String.fromCharCode(element) === 'a' || String.fromCharCode(element) === 'e' || String.fromCharCode(element) === 'i' ||
                String.fromCharCode(element) === 'o' || String.fromCharCode(element) === 'u' ?  String.fromCharCode(element) : element)
  
  }
  
  //P: will be an array of numbers. seems like it will always be an array and will always be numbers
  // R: if any of the numbers are a char code for a vowel, return a new array with that vowel
  // E: [101,102,112] => ['e',102,112]