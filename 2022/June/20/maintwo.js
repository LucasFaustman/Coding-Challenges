// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

function validatePIN (pin) {
    // I can probably utilize a simple return statement. I can use the every method to check if every element is a number, then use
  // and to check if length is greater than 3 or less than 7
    
    return (parseInt(pin) !== NaN && parseInt(pin) >= 0) 
    && (pin.split('').map(Number).every(element => !isNaN(element))) 
    && (pin.split('').every(element => element !== ' ')) 
    && (pin.length === 4 || pin.length === 6) 
  
    
  
  
  }