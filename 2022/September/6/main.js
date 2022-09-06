// Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

function capMe(names) {
    //return map. each element get char and capitlize then slice(1).toLowercase, 
    
    return names.map(element => element.charAt(0).toUpperCase() + element.slice(1).toLowerCase())
  
  }
  
  //P: will be an array of strings. seems like it will always be valid and always a string
  // R: return an array of strings with each first character capitalized, and the rest lowercased
  // E: ['LUCAS','sally','billie'] => ['Lucas','Sally','Billy']