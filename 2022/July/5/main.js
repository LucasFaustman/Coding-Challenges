// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

function shortcut (string) {
    //   we don't have to worry about uppercase vowels apparently
      
    //   we can utilize split, then filter to filter out all the vowels using conditionals
    
    
    return string.split('').filter(element => element !== 'a' && element !== 'e' && element !== 'i' && element !== 'o' &&
      element !== 'u').join('')
    }
    
    // P: will ve a string. will always be a string
    // R: return a string but with vowels removed from original string
    // E: Hello=> hll