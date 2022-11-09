// Implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// arrayDiff([], [4,5]), [], "a was [], b was [4,5]"

// arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]"

// arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []"

function arrayDiff(array1,array2) {
    if (!array1.length || !array1) {
      return []
    }
  
    //create an object which holds array 2 values
    //create an array which holds our completed result
    let newObj = {}
    let newArr = []
  
    for (let i = 0; i < array2.length;i++) {
      if (!newObj[array2[i]]) {
        newObj[array2[i]] = 1
      }
    }
  
    for (let i = 0; i < array1.length;i++) {
      if (!newObj[array1[i]]) {
        newArr.push(array1[i])
      }
    }
  
    return newArr
  
    
    }
  
  
  
  
  //Will be two arrays. unclear if always will be valid. seems like only numbers, no strings or symbols
  //Return the first array with all values removed that are present in second array
  //[1,2],[1]) == [2]
  //// arrayDiff([1,2,2,2,3],[2]) == [1,3]
  // arrayDiff([], [4,5]), [], "a was [], b was [4,5]"