// Given a non-negative integer, return an array / a list of the individual digits in order.

function digitize(n) {
  
    //I can do a simple tostring and split method here, followed by mapping each element to a number
    
    return n.toString().split('').map(Number)
  
  }
  
  // P: will be an integer. will be non negative
  // R: return an array of the inidividual digits in original order
  // E: 215 => [2,1,5]