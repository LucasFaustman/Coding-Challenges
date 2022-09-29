// The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

// Example:

// Split the below string into other strings of size #3

// 'supercalifragilisticexpialidocious'

// Will return a new string
// 'sup erc ali fra gil ist ice xpi ali doc iou s'
// Assumptions:

// String length is always greater than 0
// String has no spaces
// Size is always positive

var splitInParts = function(s, partLength){
    // first create new string
    
    let newString = ''
    
    //then for loop. iterates by partlength
    for (let i = 0; i < s.length; i+=partLength) {
      //each time loop runs, slice our original array at i, up to i + partlength
      newString += s.slice(i, i + partLength) + ' '
    }
    
    //thenr return our new string getting rid of the last space
    return newString.slice(0,-1)
  }
  
  //Will be 2 params, one a string and one an integer. integer will be the number we need to split string by, string length
  //always greater than 0. string has no spaces. integer will always be positive
  //Return a string that is splitted every partLength
  // "supercalifragilisticexpialidocious", 3), "sup erc ali fra gil ist ice xpi ali doc iou s"