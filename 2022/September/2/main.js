// Modify the spacify function so that it returns the given string with spaces inserted between each character.

function spacify(str) {
    // I can split then join
    return str.split('').join(' ')
  }
  
  //P: will be a string. seems like it will always be a string
  // R: return a string with a space inserted between each character
  // E: 'Hello Word' => 'h e l l o  w o r l d'