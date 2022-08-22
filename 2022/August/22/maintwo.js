// Given a sequence of numbers, find the largest pair sum in the sequence.

function largestPairSum (numbers) {
  
    //declare a largestSum variable which is equal to the first 2 elements so negative sums can be inputted
    let largestSum = numbers[0] + numbers[1]
    
    
    //for loop
    for (let i = 0; i < numbers.length; i++) {
      //nested for loop
  
      for (let j = 1; j < numbers.length; j++) {
        
        //each time 0 runs, it will go through each j. if numbers[i] + numbers[j] > largestSum, add to largestSum. also make sure i !== j
        if (numbers[i] + numbers[j] > largestSum && i !== j) {
          largestSum = numbers[i] + numbers[j]
  
        }
      }
    } 
    
    return largestSum
  }
  
  console.log(largestPairSum([6, 0, -20, -28, -97, -40, 34, 49, -75, -85, 12, -45, 9, 97, 97, 20, 69, 73, 57, -34, -52, 31, -17, -14, 49, -90, -13]))
  
  //170 to equal 194
  
  //P: will be an array of numbers. will contain minimum two elements and every element is an integer
  // R: return an integer representing the larger pair sum in the array. pair might not be together
  // E: [1,3,5,2,8,9] => 17 (8+9)