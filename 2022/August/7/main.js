// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// // Ouput :: "Position of alphabet: 1"

function position(letter){
    //I can do .toUpperCase charcodeat -64 
      
      let letterPosition = letter.toUpperCase().charCodeAt() - 64
      
      return `Position of alphabet: ${letterPosition}`
      
    }
    
    //P: will be a string with a letter. unclear if always will be a letter. unclear if upper or lowercase
    // R: return a string that contains Position of alphabet: 1. so a string with the position of
    // alphabet
    // E: 'b' => 'Position of alphabet: 2'