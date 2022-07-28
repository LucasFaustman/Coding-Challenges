// Write a simple regex to validate a username. Allowed characters are:

// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).

function validateUsr(username) {

    //   I can first see if username length is between 4 and 16
      if (username.length < 4 || username.length > 16) {
        return false
      }
    //   Then use the every method. every element needs to be lowercase or a number or __
    //   the method just doesnt account for a space, ill use && to add that in
      return username.split('').every(element => typeof element === 'number' || element === '_'
    || element === element.toLowerCase() && element !== ' ')
    }
    
    console.log(validateUsr('asd43 34'))
    
    // P: will be a string. might not always be a string
    // R: return a boolean representing if the string only has lower case lteers,numbers, underscores
    // and be between 4-16 character
    // E: 'lucas' => true