// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, update_light('green') should return 'yellow'.

function updateLight(current) {
  
    //your code here!
    
  //   Do a conditional here!
    
    if (current === 'green') {
      return 'yellow'
    } else if (current === 'yellow') {
      return 'red'
    } else if (current === 'red') {
      return 'green'
    }
  
  }
  
  // P: A string of either green, yellow,red. parameters stay lowercase. 
  // R: Return a string of the next logical light
  // Ex: 'green' will return 'red'