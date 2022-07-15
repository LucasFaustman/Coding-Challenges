// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

function mergeArrays(arr1, arr2) {
    //   I can use the spread syntax to combine two arrays
      
      let newArr = [...arr1,...arr2]
      
    //   then filter the unique elements, then sort
    //   I can get rid of all unique elements by using new set instead of filter!
      
      return [... new Set (newArr.sort((a,b) => a - b))]
      
    }
    
    // P: will be two arrays with 0 or more integers. might be empty though, in which case return an empty array
    // R: an array representing a combined array from arr1 and arr2 sorted in ascending order
    // E: [1,2,3,4], [5,6,7,8]) -> [1,2,3,4,5,6,7,8]