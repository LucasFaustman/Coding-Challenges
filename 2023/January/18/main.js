// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!


// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

// If the array of arrays is null/nil or empty, the method should return 0.

// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.


function getLengthOfMissingArray(arrayOfArrays) {
    //if arrayofarrays isnt valid, return 0
    
    if (!arrayOfArrays || !arrayOfArrays.length) {
      return 0
    }
    // I think we should first map array into lengths, then sort the array, then iterate through it using a for loop
    let sortedArrofArrs = arrayOfArrays.map(a => a ? a.length : 0).sort((a,b) => a - b)
    
    //if our array includes a length of 0, we should return 0
    if (sortedArrofArrs.includes(0)) {
      return 0
    }
    
    //for loop. if our current iteration + 1 does not equal our next, return current iteration + 1
    
    for (let i= 0; i < sortedArrofArrs.length; i++) {
      if (sortedArrofArrs[i] + 1 !== sortedArrofArrs[i+1]) {
        return sortedArrofArrs[i] + 1
      }
    }
  
    
    
  }
  
  //Will be an array of arrays. might not be valid array always. sometimes nested arrays could be null or empty.
  //return the length of the missing array. if we sort arrays by length, length values are consecutive besides one. return the length
  //of that array. if not valid array of arrays, return 0. if array in array is null or empty, return 0 too

