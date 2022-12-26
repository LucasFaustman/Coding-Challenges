
// Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

// Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

// Rules:

// Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.

function gordon(a){
  
    //declare a new string
    let result = ''
    
    a = a.toUpperCase('')
    
    //for loop through. if we find a, push @ to result, if vowel, push *. if no match just push
    //to new result
    
    for (let i= 0;i < a.length; i++) {
      let char = a[i]
      if (char === 'A') {
        result += '@'
      } else if (char === 'E' || char === 'I' || char === 'O' || char === 'U') {
        result += '*'
      } else {
        result += char
      }
    }
    
    //then add our !!! to end of string using map method
    
    return result.split(' ').map(word => word += '!!!!').join(' ')
    
  }
  
  //Will be a string of words. unclear if always will be a string of words. might be upper
  //or lowercase. unclear if always valid
  //Return a new string into gordon ramsay language. words should be capitalized, every word 
  //should end with 5 !'s. any letter a or A should become @, any other vowel should become *