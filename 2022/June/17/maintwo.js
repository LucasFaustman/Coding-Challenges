// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

var number=function(array){
    //your awesome code here
  //   I can probably utilize a for each method here, that places a new part of string inside element.
  //   I can first utilize the index, then add one to get the actual number.
  //   I can use a template literal to build a new string for each element
    
    return array.map((element,index) => `${index+1}: ${element}`)
  }
  
  // P: An array of strings. Won't always be a full array, sometimes might be empty. might be null or not an array
  // R: return a new array prepended by the number in which the element appears.
  // E: [a,b,c] => ['1: a', '2: b', '3: c']