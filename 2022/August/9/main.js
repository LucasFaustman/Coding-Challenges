// Find Mean
// Find the mean (average) of a list of numbers in an array.

// Information
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

var findAverage = function (nums) {
    //we can use reduce here, then at end dividie by nums.length
    
    return nums.reduce((acc,num) => acc + num,0)/nums.length
  }
  
  //P: will be an array of numbers. unclear if it will always be an array or will always have integers only
  // R: return a single integer representing the average of the array of integers
  //E: [1,3,9,3] => 16/4 => 4 