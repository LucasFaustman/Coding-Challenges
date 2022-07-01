// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

//return the total number of smiling faces in the array
function countSmileys(arr) {
  
    //   I can probably use a good amount of filters inside of a filter method, then return the length
      
      return arr.filter(element => element === ':)' || element === ';)' || element === ':-)' || element === ':~)' 
    ||  element === ';-)' || element === ';~)' || element === ':D' || element === ':-D' || element === ':~D' 
    || element === ';D' || element === ';-D' || element === ';~D').length
    
    
    }
    
    // P An array of strings. might be an empty array
    // R: return a number representing the number of smiley faces inside the array. can be :), ;). :-). :~), :D
    // E: [':D',':~)',';~D',':)']), 4)