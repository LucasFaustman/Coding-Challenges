// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

function pillars(numPill, dist, width) {
    // if numPill is 1, return 0
    if (numPill < 2) {
      return 0
    }
    
    //if numPill is 2, return dist * 100
    
    if (numPill === 2) {
      return dist * 100
    }
    
    //if more than 2 pillars, we need to add not only the distance, but the width in the inbetween pillars as well
    //since we are returning in cm, make every input in cm. to get width of all pillars besides 2, do numpill - 2 * width
    //then once you get all the width of pillars, get distance between pillars. * by 100 to get cm
    //numpill - 1 because we just need the distance between first and last pillar
    
    return ((numPill - 2) * width) + ((numPill - 1) * (dist * 100))
  
            
  }
  
  //P: 3 integers. one represents the num of pillars, next is the distance between pillars, finally the width of pillars.
  // Will be positive integers. second param will be in meters, last will be in crm
  // R:  return an integer representing the distance between the first and last pillar in crm
  //e: (2, 20, 25) , 2000) => 2 pillars. 20 meters apart, 25 are widths of pillar. width of pillars doesnt matter here bc
  //there is only 2 of them