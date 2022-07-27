// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

// Note: You will always be given a non-empty list containing positive values.

function sumOfMinimums(arr) {

    //   first declare a sum variable
      let sum = 0
    //   then a for loop which starts at 0, ends at length of arr, i++
      
      for (let i = 0; i < arr.length; i++) {
    //     each time it runs, I want to grab the minimum of an array the push to sum
        sum += Math.min(...arr[i])
      }
    //   return sum
    return sum
    }
    
    // P: Will be a nested array. array of arrays
    // R: return a singl enumber representing the sum of minimum values in each row
    // E:[[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]] => 9