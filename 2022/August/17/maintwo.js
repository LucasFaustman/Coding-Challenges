// Combine strings function
// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

// Create the combineNames function here

function combineNames(first,last) {
  
    //i can use the concat method with a string space added
    return first.concat(' ' + last)
  }
  
  
  //P: function will take in two parameters representing a first and last name, or strings. unclear if always will be strings
  // R: return a sinle string representing the 2 paramters combined
  // E: 'Lucas','Faustman' => 'Lucas Faustman'