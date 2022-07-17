// Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

function minValue(values){
    // Im pretty sure I can first remove all duplicates in the arr, convert each element to a string, then add together and
  //   return a number
    
  //   also need to sort the array in ascending order to get the smallest integer possible
    const newArr = [... new Set(values.sort((a,b) => a-b))]
    
    return Number(newArr.join(''))
  }
  
  // P: will be an array. only positive integers in array
  // R: return a number representing the smallest number that can be formed from the array of digits
  // minValue ({1, 3, 1})  ==> return (13)