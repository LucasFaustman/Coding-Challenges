// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

function upArray(arr){

    //edge cases
    if (!arr || !arr.length || arr.some(number => number < 0 || number > 9)) {
      return null
    }
    
    //for loop starting from end
    
    for (let i = arr.length -1; i >= 0; i--) {
      //if our current num < 9, add one to it and return
      if (arr[i] < 9) {
        arr[i]++
        return arr
        //else assign our number to 0
      } else {
        arr[i] = 0
      }
      
    }
    //if nothing return, add one to beginning and return arr
    
    arr.unshift(1)
    return arr
    
  }
  
  console.log(upArray([9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 8]))
  
  //P: will be an array. might be empty or have negative nums. in which case, return null
  // R: return null if any nums are negative or arr is invalid. return array representing +1 added to it
  // E: [2,3,9] => [2,4,0]