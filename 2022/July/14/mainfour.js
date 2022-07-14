// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
    // first declare a variable holding a sum
    
    let alphaCount = 0
  
    
  //   for loop. each time the loop iterates through string, checks if letter has been used. if not, add to alphacount
  //   I also need the for loop to not add letters that have been previously added already. i can filter through the string
  // and just get unique letters
      let newStr = string.split('').filter((element,index) => string.indexOf(element) === index)
  //     then use newStr in my forloop
    for (let i = 0; i < newStr.length;i++) {
  //     each time in the loop, log to alphaCount
    alphaCount++
      
    }
    
  //   return 
    
    return alphaCount > 26
  }
  
  // P Will be a string. might not always be a string
  // Return a boolean representing if the string iss a pangram(sentence containing all letters of the alphabet)
  // E: My name is Lucas => false "The quick brown fox jumps over the lazy dog." => true