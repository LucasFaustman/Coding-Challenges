// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

function towerBuilder(nFloors) {
    //   we first should declare an array
      let newArr = []
      
    //   then we can use a for loop. each itration will add a new block to arr
      
      for (let i = 0; i < nFloors; i++) {
      
        newArr.push(' '.repeat(nFloors - i - 1) +
                    '*'.repeat(2 * i + 1) +
                    ' '.repeat(nFloors - i - 1))
    
    
    //     inside the loop we want to push '*' to new arr every iteation. 
    //     also push a space to each iteration
    //     ' 'needs to be added based on floor number - position - 1
    //     '*' needs to be added based on index position. 2 * i + 1
      }
      
    return newArr
    }
    
    // P: will be a number representing the number of floors. will always be positive and an integer
    // R: return a tower block represented with '*' characters
    // E: 3 => [
    // ' * '
    // ' *** '
    // ' *****'
    // ]