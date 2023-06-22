// Write a function that accepts two square matrices (N x N two dimensional arrays), and return the sum of the two. Both matrices being passed into the function will be of size N x N (square), containing only integers.

// How to sum two matrices:

// Take each cell [n][m] from the first matrix, and add it with the same [n][m] cell from the second matrix. This will be cell [n][m] of the solution matrix.

// Visualization:

// |1 2 3|     |2 2 1|     |1+2 2+2 3+1|     |3 4 4|
// |3 2 1|  +  |3 2 3|  =  |3+3 2+2 1+3|  =  |6 4 4|
// |1 1 1|     |1 1 3|     |1+1 1+1 1+3|     |2 2 4|

function matrixAddition(a, b){
    //for in loops
    
    for (let row in a) { //get the row
      for (let col in a[row]) { //get the col
        a[row][col] += b[row][col] //add our current point from a with our curr point from b
      }
    }
    return a //return a
  } 
  
  //WIll be 2 2 dimensional array.(2 arrays of arrays). seems like they will always be valid arrs
  //always will have ints inside the arrays
  
  //Return the sum of the two
  // Take each cell [n][m] from the first matrix, and add it with the same [n][m] cell from the second matrix. This will be cell [n][m] of the solution matrix.
  
  
  // Example
  // matrixAddition(
  //   [ [1, 2, 3],
  //     [3, 2, 1],
  //     [1, 1, 1] ],
  // //      +
  //   [ [2, 2, 1],
  //     [3, 2, 3],
  //     [1, 1, 3] ] )
  
  // // returns:
  //   [ [3, 4, 4],
  //     [6, 4, 4],
  //     [2, 2, 4] ]