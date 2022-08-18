// Time to test your basic knowledge in functions! Return the odds from a list:

function odds(values){
    // filter method
    return values.filter(value => value % 2 !== 0);
  }
  
  //P: will be an array. sometimes will be an empty array. unclear if always will be an array? array of nums
  // R: return an array with odd numbers only
  // e: [1,3,4] => [1,3]