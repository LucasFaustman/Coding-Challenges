// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.


// Notes:
// Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string

function isValidIP(str) {

    //   we first need to split based on the periods
    //   we can check if str.split('.')has a length of 4. if so, return true
      let splittedStr = str.split('.')
      if (splittedStr.length !== 4) {
        return false
      }
      
    
    
    //   check if element is a number
    //   check if each element is between 255 and 0
    //   check if element has a /n, e, ' ', or ''. also make sure no leading zeros unless the length is 1
      return splittedStr.every(element => !isNaN(element) &&  element >= 0 &&
      element <= 255 && !element.includes(' ') && !element.includes("/") && !element.includes('\n')
    && !element.includes('e') && (element[0] !== '0' || element.length === 1) && 
      element !== '')
      
    
    }
    
    
    // P: will be a string. always will be a single string
    // R: a boolean represernting if the str is a valid ip or not. cant have leading zeros. 
    // needs to have at least 4 elements, only values between 0 and 255