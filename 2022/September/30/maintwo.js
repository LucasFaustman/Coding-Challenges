// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

function cleanString(s) {
    //first declare a newArr
    //then for loop
    let newArr = []
    
    for (let i = 0; i < s.length ; i++) {
  
      //if character isnt #, then push to Arr
      if(s[i] !== '#') {
       newArr.push(s[i])
      }
      else 
        //if not, pop the last character in arr
        
      newArr.pop()
      
      
    }
    //return joinedarray
    return newArr.join('')
  }
    
    //Will be a string. seems like always a string
    //Return a string representing the original string with each # backspaced
    //"abc#d##c"      ==>  "ac" 