// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function arrayMadness(a, b) {
    // I can map through each array, do element**2, then reduce
    //simple return statement
    
    return a.map(element => element**2).reduce((acc,num) => acc + num,0) > b.map(element => element**3).reduce((acc,num) => acc + num,0)
  }
  
  //P: will be 2 arrays. unclear if arrays will always be arrays. will be full of positive integers
  // R: return a boolean representing if the sum of squares in array a is greater than the sum of cubes of each element in b
  // E: [4,5,6],[1,2,3] -> true, because 4**2 + 5**2 6**2 (16+25+26) => 76 > 1**3 2**3 3**3 (1 + 8 + 27 => 36)