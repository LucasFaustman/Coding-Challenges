// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

function move (position, roll) {
    // Just return using a simple math equation. position + roll*2
    
    return position + roll * 2
  }
  
  // P: Will always be 2 numbers. Wont be negative since nums represent position on board or dice
  // R: A number representing the players position
  // E(3,6) => 15