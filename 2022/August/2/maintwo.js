// Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

function solution(pairs){
    // TODO: complete
    
  //   so I can probably get the property and keys from an object method\
    //i can use the Object.entries method to get the properties and keys
    //i need to map. make sure every element inside each element is a string. then join nested array with an equal sign
  //   before joining, i need to replace ',' between each pair with ' = '
  //   then join with a comma
    return Object.entries(pairs).map(element => String(element).replace(',', ' = ')).join(',')
  }
  
  console.log(solution({a: 1, b: '2'}))
  
  // P: will be an object. unsure if it will always be an object. object will contrain two properties
  // R: return a string representation of the object.
  // E: {a: 1, b:2} => 'a = 1, b = 2'