// Arrow style Functions
// Come here to practice the Arrow style functions Not much else to say good luck!
// Details
// You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.

var ArrowFunc = function(arr) {
    //I can do arr.map and then join at the end
    return arr.map(element => String.fromCharCode(element)).join(''); 
  }
  
  //P: will be an array of numbers. seems like it will always be an array of nums
  // R: return a string representing the array of nums converted to letters
  // E: [84,101,115,116] => 'Test'