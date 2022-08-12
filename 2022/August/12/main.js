// When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April.

// Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch.

// Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.

// Notes:

// The movement of the petal is quite complicated, so in this case we can see the velocity as a constant during its falling.
// Pay attention to the data types.
// // If the initial velocity is non-positive, the return value should be 0

function sakuraFall(v) {
    // if input is 0 or n negative, return 0
    
    if (v < 1) {
      return 0
    }
    
    //it takes 80 seconds for a petal travelling 5 cm/s to get to the bottom
    //branch is 400 cm high. 5 * 80
    //we can do 400/v
    
    return 400/v
    
  }
  
  //P: is an integer. might be positive or negative. represents the speed of a potal falling in cm/s
  // R: return an integer representing the time it takes tfor the petal to reach the ground. it takes 80 seconds to reach ground
  // E: 5 => 40 because it takes 80 seconds to reach the ground, moving at 5 cm a second,