// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

function contamination(text, char){
    // first can figure out if either string is empty
  //   After figuring if strings are empty, we can map through first string. split, then map converting each character to char
    
    if (text === '' || char === '' ) {
      return ''
    }
    
    return text.split('').map(element => element = char).join('')
  }
  
  //P: will be two strings. strings might be empty. char will be an empty string or a length of 1
  // R: return a string representing the first string overridden with the second string. if either is empty, return empty string
  // E 'abc','z' => 'zzz'