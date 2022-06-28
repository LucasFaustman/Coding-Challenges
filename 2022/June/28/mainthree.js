// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

function bouncingBall(h,  bounce,  window) {
    // first, I can take care of the invalid experiments
    
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h ) {
      return -1
    }
    
  //   i can most likely utilize a for loop here. I can first declare a variable that holds bouncetimes
    
    let bounceTimes = 0
    
   
  //   then create the for loop.
  // I want to multiple h * bounce until result is less than window
   
  for (let i = 1; h > window; i+=2) {
    h *= bounce
    bounceTimes = i
  }
    
    return bounceTimes
  }
  
  // P will be three numbers. some floats, some integers. won't be negative.
  // R: return a single number representing the number of times the mother will see the ball pass infront of their window
  // E: 3.0,.66,1.5 => 3