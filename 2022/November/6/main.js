// One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.

// Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):

// instead of including i or I put the number 1 in the password;
// instead of including o or O put the number 0 in the password;
// instead of including s or S put the number 5 in the password.



function makePassword(phrase) {
    //create an object containing the parameter set in the problem, lowercase
    let passwordObj = {
      'i': 1,
      'o': 0,
      's': 5
    }
    
    //map through string
    return phrase.split(' ')
  .map(element => passwordObj[element[0].toLowerCase()] !== undefined ? passwordObj[element[0].toLowerCase()] : element[0])
    .join('')
  }
  
  //Will be a string. String seems like it will always be valid. might be letters, numbers, symbols
  //Return a new string with just the first letter of each word. i or I switched out with 1, o 
  //or O switched with 0, and s or S switched with 5
  
  //"Give me liberty or give me death"  --> "Gml0gmd"
  // "Keep Calm and Carry On"            --> "KCaC0"