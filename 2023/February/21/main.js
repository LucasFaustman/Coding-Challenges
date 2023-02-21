// Given an unsorted array of integers, find the smallest number in the array, the largest number in the array, and the smallest number between the two array bounds that is not in the array.

// For instance, given the array [-1, 4, 5, -23, 24], the smallest number is -23, the largest number is 24, and the smallest number between the array bounds is -22. You may assume the input is well-formed.

// You solution should return an array [smallest, minimumAbsent, largest]

// The smallest integer should be the integer from the array with the lowest value.

// The largest integer should be the integer from the array with the highest value.

// The minimumAbsent is the smallest number between the largest and the smallest number that is not in the array.

function minMinMax(array) {
    // we can get min and max using math.min and math.max
    
    let min = Math.min(...array)
    let max = Math.max(...array)
    //then a for loop starting at min till max. if number is not included in array, return it
    
    for (let i = min; i <= max; i++) {
      if (!array.includes(i)) {
        return [min,i,max]
      }
    }
  }
  
  //Will be an array of integers. unclear if array will always be valid. integers might be positive or negative or 0