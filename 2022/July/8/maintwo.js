// Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

function roundToNext5(n){
    // I can use the math.ceil method
  //   divide num by 5, then mutliply by 5
    
    return Math.ceil(n / 5) * 5
  }
  
  // P: will be an integer, positive or negative including 0. all inputs are valud
  // R: return an integer which representing the param rounded up to the nearest integer of 5
  // 2 => 5 -2 => -5