// When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.



function longestWord(stringOfWords){
    //declare a variable which holds array of splitted words
    //then declare variable holding length of largest word
    //if length is larger or equal to current word, reassign
    //then return word
    let newArr = stringOfWords.split(' ')
    let newStr = ''
    
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i].length >= newStr.length) {
        newStr = newArr[i]
      }
    }
    
    return newStr
  }
  
  //Will be a string of words seperated by spaces. always will be valid, no funny business.
  //return the word that has the longest length. if equal lengths, return last one
  //'red blue gold' => gold
  //'red white blue' => returns string value of white