// Template Strings
// Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
// Task
// Your task is to return the correct string using the Template String Feature.
// Input
// Two Strings, no validation is needed.
// Output
// You must output a string containing the two strings with the word ```' are '```

var TempleStrings = function(obj, feature) {
    //i can just use template literals for this!
    
    return `${obj} are ${feature}`
  }
  
  //P: will be 2 strings. always will be valid
  // R: return a string containing the 2 params combined with template literal
  // E: 'Hello' 'Lucas' => 'Hello Lucas'