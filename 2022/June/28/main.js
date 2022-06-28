// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

// Write a function that given a floor in the american system returns the floor in the european system.

// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.

function getRealFloor(n) {
    //   I can make a few if else statements here. first being if n < 0 or 0
      
      if (n < 0 || n === 0) {
          return n
    //     then if n is less than 13, -1 from n
      } else if (n < 13) {
          return n - 1
    //     and if n >= 13, subtract 2
      } else if (n >= 13) {
        return n - 2
      }
      
    }
    
    // P: will be a number. might be negative, will be an integer
    // R: return a number representing the eurpoean floor number of the parameter. if negative, just return the negative number
    // E: 5 => 4 15 => 13