// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

// Task
// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

function pipeFix(numbers){

    //   declare a new array
      let newArr = []
    //   get max of numbers array and min number of array
      
      let maxNumber = Math.max(...numbers)
      let minNumber = Math.min(...numbers)
    //   then run a for loop from min number to max number inside of numbers
      
      for (let i = minNumber; i <= maxNumber;i++) {
        newArr.push(i)
      }
    //   return new arr
      return newArr
    }
    
    // P: will be an array of numbers. integers, and positive numbers
    // R: an array of numbers that increment by 1 for each index from min value to max value
    // E: 1,2,4,5 => 1,2,3,4,5