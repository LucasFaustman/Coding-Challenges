// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
    // I can utilize the filter method here to only give me one unique number
  //   if the last index is equal to the index, return the number
  // make sure the returning element is a number and not in an array
    
    return Number(arr.filter((element,index) => arr.lastIndexOf(element) === arr.indexOf(element)).join(''))
  }
  
  // P: Will be an array of numbers. each array will contain at least 3 numbers
  // R: Return the unique number in the array
  // E[1,1,3] => 3