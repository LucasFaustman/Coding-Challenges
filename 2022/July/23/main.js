// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".


function problem(x){
    // probably can do a simple ternary
    
    return typeof(x) === "number" ? x * 50 + 6 : "Error"
    }
  // p: will be a num or string
  // r: return param * 50 and +6. if a string, return error
  //e 2 -> 106