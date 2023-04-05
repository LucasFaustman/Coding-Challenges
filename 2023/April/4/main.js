// Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings.

// The method takes two parameters, the query string and the array of strings to search, and returns an array.

// If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty" (or Nothing in Haskell, or "None" in Python and C)

function wordSearch(query, seq){
    //convert query to uppercase
    query = query.toUpperCase();
    
    //then filter method
    let res = seq.filter(str => str.toUpperCase().includes(query))
    
    return res.length ? res : ['Empty']
  }
  
  
  //Will be 2 params - One will be an array, the other a string. array will always be an array
  //of strings, string will always be a string
  
  //Return a filtered array of all elements that include our string, ignoring capitalization. If empty, return ['Empty']
  
  //E['California','Colorado','Nevada'], 'Ne' => ['Nevada']