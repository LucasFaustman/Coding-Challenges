// Task
// Create a method all which takes two params:

// a sequence
// a function (function pointer in C)
// and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.



function all( arr, fun ){
    // if arr is empty, return true
    if (!arr | !arr.length) {
      return true
    }
    //then use the every method
    return arr.every(element => fun(element))
  }
  
  //P: will take 2 params. one will represent a sequence(which is an array of nums), second will be a function. arr might be empty
  // R: return a boolean representing if the function is true inside the array
  // E:(1, 2, 3, 4, 5), greater_than_9) -> false , since not all of the elements are greater than 9