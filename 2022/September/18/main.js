// Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.



function keysAndValues(data){
    // first create a new array
    let newArr = []
    
  
  //First use Object.keys to get all property names of data then push to newArr  
  newArr.push(Object.keys(data))
    //Use object.values to get all values of data then push to newArr
    newArr.push(Object.values(data))
    //return newArr
    return newArr
  }
  
  //P: will be an object. seems like it will always be an obj
  // R: returning an array containing 2 arrays. first array will be the key of obj, second the values
  // E: {a: 1, b: 2, c: 3} -> [['a', 'b', 'c'], [1, 2, 3]]