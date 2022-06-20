// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
  //   First declare a variable holding an array
    let result = [0,0,0]
  //   then create a for loop that adds to result based on the counter, which represents years
    for (let i = 1; i <= humanYears; i++) {
      result[0]++
      if (i === 1) {
        result[1] += 15
        result[2] += 15
      } else if (i === 2) {
        result[1] += 9
        result[2] += 9
      } else if (i > 2) {
        result[1] += 4
        result[2] += 5
      }
    }
    
  //   then return the result
    
    return result
  }
  
  // P: a number that is greater than 0, always will be a whole number
  // R: Return an array of numbers. first number signifies human years, second cat, then dog
  // E: 1 => 1,15,15
  // E: 2 => 2,24,24