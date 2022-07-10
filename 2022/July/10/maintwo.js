// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

function validatePIN (pin) {
    //   first slice original pin
    //   then need to split the string
    //   then map each element to a number, then join everything and make it into a string
    //   then check if length of string is equal to 4 or to 6, and also check if param is equal to new string
      
    
      
     let splittedNumberedPin = pin.slice().split('').map(Number).join('').toString()
      
      return splittedNumberedPin === pin && (pin.length === 4 || pin.length === 6)
    
    
    }
    
    
    // P: will be a string of numbers. might not all be strings of numbers though, a negative sign might pop up
    // R: return a boolean representing if pin has 4 or 6 digits and only has numbers included
    // E: 1234 => true 12345 => false