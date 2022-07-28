// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// ###Arguments (Haskell)

// First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
// Second argument: the original string to be converted.
// ###Arguments (Other languages)

// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.

function titleCase(title, minorWords) {
  
  
    //   if title doesn't exist, return ''
      
      if (!title) {
        return ''
      }
    //   if minorword exists, split it
      //   im guessing we need to use the split map joim method
      if (minorWords) {
      let arrOfMinorWords =  minorWords.split(' ').map(element => element.toLowerCase())
       let newStr = title.split(' ').map(element => arrOfMinorWords.includes(element.toLowerCase()) ? element.toLowerCase() :
                                 element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()).join(' ')
       
    //    then i need to uppercase the first letter
       return newStr.charAt(0).toUpperCase() + newStr.slice(1)
    //     if there are no minor words, then return a string with every word capitalized
     } else if(!minorWords) {
       return title.split(' ').map(element => element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()).join(' ')
     }
      
    
    }
    
    // P: two strings. title string will always be a string, minor words might be empty
    // R: return a new string that is titlecased, besides strings in minorWords unless the first word
    // 'a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'