// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0

const sequenceSum = (begin, end, step) => {
    // May the Force be with you
  //   create a variable representing the sum
    let sum = 0
    
  //   then create a for loop. starts at begin, ends at end. each iteration +s by step. then add i to sum
    
    for (let i = begin; i <= end; i+= step){
      sum += i
    }
  //   return sum
    return sum
  };
  
  // P 3 numbers that are always integers and positive
  // R: a single number representing the addition of the sequence
  // E; 2,4,2 => 8