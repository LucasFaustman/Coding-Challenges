// Write a function with the signature shown below:

// function isIntArray(arr) {
//   return true
// }
// returns true  / True if every element in an array is an integer or a float with no decimals.
// returns true  / True if array is empty.
// returns false / False for every other input.

function isIntArray(arr) {
  
    //array could be null as well
    
    if (!arr) {
      return false
    }
    
    
    //I can probably use the every method here
    //first check if element is not NaN
    //check if element isnt null
    //check if element isnt a string
    //now we have to check if element has a decimal with anything other than 0
    //we can check if decimals exist using mod 1
     
    
    return arr.every(element => !isNaN(element) && element !== null && Number(element) === element && element % 1 === 0)
  }
  
  
  //Will be a weird parameter. will always be an array, but the contents of array might be an integer,float, or nan, or string, or anything
  //Return a boolean representing true if every element in array is an integer or float with no decimals, or empty. false if everything else
  // E [] => true, [1,2,3,4] => true, [1,2.5,3,NaN] => false