// Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string.

// Note:

// Empty string values should be ignored.
// Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.


function formatWords(words){
    //if words is empty or null, return ""
    if (!words || !words.length) {
      return ""
    }
    //Since param might include empty strings, why not get rid of them first?
    let newWords = words.filter(word => word !== '')
    //if new word has a length of 1, return the word
    if (newWords.length === 1) {
      return newWords[0]
    }
    
    //for loop
    //create new str
    let res = "";
    //go from end to beginning
    for (let i = newWords.length - 1;i >= 0; i--) {
        if (i === newWords.length  - 1) {
          res += `and ${newWords[i]}`
        } else if (i === newWords.length - 2) {
          res = `${newWords[i]} ${res}`
        } else {
          res = `${newWords[i]}, ${res}`
        }
    }
    
    
    return res;
  }
  
  //Will be an array of strings. seems like the array of strings will always be words with eng
  //letters. seems like the array might be empty
  
  //Return a start ring where it formats the array of words into single comma seperated values
  //last word should be seperated by the word and instead of a comma
  
  //['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
  // ['ninja', '', 'ronin'] --> "ninja and ronin"