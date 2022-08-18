// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0

function sameCase(a, b){

  
    //we can go through each case with conditionals. if either letter is not a letter, return -1
  //   we can do this by utilizing .touppercase and .tolowercase, since the letter should be different after using these method
    
    if (a.toLowerCase() === a.toUpperCase() || b.toLowerCase() === b.toUpperCase()) {
      return -1
    }
    
    //3 more conditionals. if a and b is lowercase, return 1
    
    if (a.toLowerCase() === a && b.toLowerCase() === b) {
    return 1
      //if both are uppercase, return 1
    } else if (a.toUpperCase() === a && b.toUpperCase() === b) {
    return 1
      
      //else return 0
  } else
      return 0
  }
  //P: Will be two strings. each string will represent a single letter. unclear if always will be strings
  // R: return integer 1 if both letters are the same case, 0 if both are letters but not the same case, and -1 if either character
  // is not a letter
  //E: 'C','B' => 1, ' ','Z' => -1, 'A','b' => 0