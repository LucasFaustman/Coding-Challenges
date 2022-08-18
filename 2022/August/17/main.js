// Description:
// Remove all exclamation marks from the end of sentence.

function remove (string) {  
    //simple conditional at start. if last char of string isn't a !, then return string
    
    if (string[string.length - 1] !== '!') {
      return string
    }
    
    //then create a variable that gets rid of the last character of a string, or the last excalamtion point
    
    let newParam = string.slice(0,-1)
    
    //then recursive return.
    return remove(newParam)
    
    
    
  
  }
  
  // P: will be a string. unclear if always will be a string. string might have exclamation point at end, might not
  // R: return a string with the last exclamation point at the end of the string removed
  // E: 'Hi!' -> 'Hi' 'Hi' -> 'Hi'