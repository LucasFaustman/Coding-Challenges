// A Tidy number is a number whose digits are in non-decreasing order.

// Task
// Given a number, Find if it is Tidy or not .

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// Number passed is always Positive .

// Return the result as a Boolean



function tidyNumber(n){
    //first create a variable that turns number into array
    let newArr = n.toString().split('').map(Number)
    
    //then loop through new arr
    
    for (let i = 0; i < newArr.length; i++) {
      //if newArr[i] > newArr[i+1], return false
      if (newArr[i] > newArr[i+1]) {
        return false
      }
    }
    //or return true
    return true
  }
  
  //P: will be an integer. always positive and always valid
  // R: return a boolean representing if all digits of the number are in non decreasing order
  // E: 12 => true because 2 > 1    102 => false because 0 < 1