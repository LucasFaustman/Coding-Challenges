// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the starting array, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

function findDeletedNumber(arr, mixArr) {
  
  

    // I can use filer and .includes 
    //have to do a ternary though. if that filter comes up with undefined, return 0, if not return filtered includes
    
    
    return arr.filter(element => !mixArr.includes(element))[0] === undefined ? 0 : arr.filter(element => !mixArr.includes(element))[0]
  }
  
  //P: will be 2 arrays. first array is array with full sequence, second is a mixed array with an element deleted
  // R: return an integer representing the missing integer in the second array from the first array
  // E: [1,2,3,4,5] , [1,4,5,2] => 3