// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
    // i can use reduce for this
    //convert numtostring.length and see if its bigger than acc.tostring.length
    
    return array.reduce((acc,num) => num.toString().length > acc.toString().length ? acc = num : acc,0)
  }
  
  //P: will be an array of integers. unclear if always will be an array
  //R: the number with the highest amount of digits. if two numbers have the same amt of digits, return the first one
  // E: [1,2,10] => 10