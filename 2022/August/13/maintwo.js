// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// // Return value as boolean values, true for the string to contains "English", false for it does not.

function spEng(sentence){
    // bring sentence to lowercase, then return and check if it's equal to 'english'
      //since english can appear inside of other letters and still be true, just use the .includes method after .tolowercase
      
      return sentence.toLowerCase().includes('english')
    }
    
    //p: should be a string of letters which represent a word
    // R: return a boolean representing if the word spells english correctly, independant of capitalization
    // E: 'engLISH' => true 'ensfd' => false