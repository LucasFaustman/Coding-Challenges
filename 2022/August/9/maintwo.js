// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

function multipleOfIndex(array) {
    // I can use the filter method here
    
    return array.filter((element,index) => element % index === 0)
  }
  
  //P: will be an array. unclear if always will be an array. will include both positive and negative integers
  // R: return an array consisting of integers which are multiples of their own index
  // E: [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25] (because 1 is a multiple of 6, 2 is a multiple of 32, 5 is a multiple of 25)
  