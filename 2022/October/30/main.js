// Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.



function stringMerge(string1, string2, letter){
    // I think I can use indexof here to my advantage
    
    let firstStringStoppage = string1.indexOf(letter)
    let secondStringStoppage = string2.indexOf(letter)
      
      return string1.slice(0,firstStringStoppage).concat(string2.slice(secondStringStoppage))
  
  }
  
  //Will be 3 strings. first 2 strings will be words, third is a letter. no funny business, will always be valid
  //Return a string representing the first two strings combined at the first index of the third parameter
  //("coding", "anywhere", "n")   ==>  "codinywhere"