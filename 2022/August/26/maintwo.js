// Filter the number
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

var FilterString = function(value) {
    //filter method here. if Number(element) == element, return it
    //parseint to get number at end. split, filter,join
    
    return parseInt(value.split('').filter(element => Number(element) == element).join(''))
  }
  
  //P: will be a string. might be letters and might be numbers inside strings
  // R: return all the numbers in that string in the order in which they occur. all integers
  // E: [1,l,u,c,2,3] => 123