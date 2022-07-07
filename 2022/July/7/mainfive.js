// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.



function count (string) {  
    // The function code should be here
  //   first should have a conditional that checks if string is valid as well as leng
     if (!string || !string.length) {
       return {}
     }
    
  //   declare an object to hold the result
    
    let result = {}
    
  // then I can split the string and utilize a for each method to loop through each character of string
  //   if there is a match in the element in the original object, then plus it by 1. if not, then declare element is 
  // equal to 1
    
  
     string.split('').forEach(element => result[element] ? result[element]++ : result[element] = 1)
    
  //   return the result
    return result
  }
  
  // P will be a string. string might be empty though
  // R: return an object representing the count of reoccuring characters in a string
  // E: 'aba' => { a: 2 , b: 1}