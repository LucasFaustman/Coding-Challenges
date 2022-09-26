// Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

// Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

// find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
// find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8
// The first array will always have at least one element.

function findMissing(arr1, arr2) {
    // Since there may be duplicates, I can't just use a simple includes here 
  
    //I can try a for loop instead
    //sort both arrays
    
    let sortedArr1 = arr1.sort((a,b) => a - b)
      let sortedArr2 = arr2.sort((a,b) => a - b)
  
    for (let i = 0; i < sortedArr1.length;i++) {
  //if our current iteration of arr1 doesnt equal arr2, return that number
      if (sortedArr1[i] !== sortedArr2[i]) {
        return sortedArr1[i]
      }
  }
  }
  
  
  //Seems like both params will always be valid. will be arrays. first array will always have at least one element, second may not
  //may have duplicates
  //Return an integer representing the missing integer between both arrays
  //[1, 2, 3], [1, 3]), 2