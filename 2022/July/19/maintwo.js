// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

function flattenAndSort(array) {
    // first flatten the array using concat and the spread operator
      let flatArr = [].concat(...array)
      
    //   then sort the array and return
      return flatArr.sort((a,b) => a - b)
    }
    
    // P: will be an array. might not always be a valid array and might be empty
    // R: return a flatted array in ascending order
    // E:[[3, 2, 1], [7, 9, 8], [6, 4, 5]]) => [1, 2, 3, 4, 5, 6, 7, 8, 9]