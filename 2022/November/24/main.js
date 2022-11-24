// Write a function that combines two arrays by alternatingly taking elements from each array in turn.

// The arrays may be of different lengths, with at least one character/digit.
// One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).

function mergeArrays(a, b) {
    // for loop
    
    //then slice at end from both params
    
    let newArr = []
    let bIndex = 0
    
    for (let i = 0; i < a.length; i++) {
      newArr.push(a[i])
      if (b[i]) {
        newArr.push(b[i])
        bIndex++
      }
    }
    
    return newArr.concat(b.slice(bIndex))
  }
  
  //Will be 2 params. may be different lenghts with at least one charachter/digit. one will be
  //array of nums, other will be array of strings
  //Return a merged array that combines two arrays by alternating taking elements from each array turn
  //[a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]