// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {  
    //if string is empty, return empty obj
    
    if (!string || !string.length) {
      return {}
    }
    
    //create new obj
    let newObj = {}
    
    //for loop. check each time if property exists, if so increment by 1, else assign to object
    for (let i = 0; i < string.length; i++) {
      if (newObj[string[i]]) {
        newObj[string[i]]+=1
      } else {
        newObj[string[i]] = 1
      }
    }
    
    return newObj
  }
  
  //Will be a string. might be letters, numbers, symbols, anything. might be empty or invalid
  //Return an object representing all occurences of characters in string. if empty, should be {}
  //E: '123' => {"1":1, "2":1, "3",1}