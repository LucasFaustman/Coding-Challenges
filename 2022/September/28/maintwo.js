// Sort the given array of strings in alphabetical order, case insensitive

sortme = function( names ){
  
    //I think I can just use the sort method here
    //with a and b, make a lowercase. use .localeCompare method to compare a.toLowerCase to b.toLowerCase
    
    return names.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()))
  }
  
  
  //Will be an array of strings. seems like will always be a string, always valid
  //Return array in alphabetical order, case insensitive
  // ["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]