// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

function gimme (triplet) {

  
    //   I can first decalre a variable that is a sorted array
      
      let sortedTriplet = [...triplet].sort((a,b) => a - b)
    //   then I can grab the 2nd value out of the sorted array
    
      return triplet.indexOf(sortedTriplet[1] )
    //   then return using the index of the 2nd value
    }
    
    // P: will be an array of 3 numbers. always will be an array. numbers will be integers
    // R: a single number representing the middle elements index
    // [2,3,1] => 0 because 2 is the number between 1 and 3 and its the middle index