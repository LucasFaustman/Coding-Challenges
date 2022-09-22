// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.

var encryptThis = function(text) {
    // first split string into array
    //then map through each element
    //mapping here will be a little complicated. first split string into words. then map into each word then further split and map
    //if letter of element is first index, convert to charcode
    //if index is 1, element is equal to last element of array
    //last element of array is the second element of og array
    
    return text.split(' ')
    .map(word => word.split('').map((element,index) => index === 0 ? element.charCodeAt() : index === 1 ? element = word[word.length - 1] : index === word.length - 1 ? element = word[1] : element).join(''))
    .join(' ')
    
  }
  //P: will be a string. space seperated words. no special characters, seems like string will always be valid
  // R: return a string which represents an encrypted string. first letter will be converted to unicode num. second letter will be 
  // swapped with last. rest of string the same
  // E: 'Hello' => '72olle' because 72 is unicode of H, o is swapped with e, then the rest