// Given a two-dimensional array, return a new array which carries over only those arrays from the original, which were not empty and whose items are all of the same type (i.e. homogenous). For simplicity, the arrays inside the array will only contain characters and integers.

// Addendum:

// Please keep in mind that for this kata, we assume that empty arrays are not homogenous.

// The resultant arrays should be in the order they were originally in and should not have its values changed.

// No implicit type casting is allowed. A subarray [1, '2'] would be considered illegal and should be filtered out.

function filterHomogenous(arrays) {
    //2 for loops
    //declare an array
    let newArr = [];
    //get rid of empty arrs
    arrays = arrays.filter(arr => arr.length && arr)
    for (let i= 0; i < arrays.length; i++) {
      //get single arr
      let arr = arrays[i]
      //get our first type from array of first element
      let firstType = typeof(arr[0])
      let isHomogeneous = true;
      for (let j = 1; j < arr.length; j++) {
        //if our iteration is not equal to our first time, assign to false and break
        if (typeof arr[j] !== firstType) {
          isHomogeneous = false;
          break;
        }
      }
      //if truty, push to newArr
      if (isHomogeneous) {
        newArr.push(arr);
      }
    }
    return newArr
    
  }
  
  
  //Will be an array of arrays. array of arrays can include strings inside, numbers, empty arrays.
  //will always be an array of arrays
  
  //Return a new array which carries over only the arrays from the original where are not empty and whose
  //items are all the same type
  
  //important to not that implicit casting is not allowed
  
  //Given [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]], function should return [[1, 5, 4], ['b']].