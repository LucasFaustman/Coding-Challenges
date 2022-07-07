// Given a string str, reverse it and omit all non-alphabetic characters.

function reverseLetter(str) {
    //   I can do this all in a simple return statement. split, then filter for letters, then reverse and join again
    //   for filter, I can use a conditional with upper and lower case to check if alphabetical
      return str.split('').filter(element => element.toLowerCase() !== element.toUpperCase()).reverse().join('')
      
      
    }
    
    // P: will be a string. always given a string. might contain lowercase letters, digits and symbolds
    // R: reverse the string and ommit all characters that arent alphabetical
    // E: => 'yikes' => 'sekiy'