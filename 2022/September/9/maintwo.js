// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

var flatten = function (array){
    // I can probably use the .flat method
    //flat method doesnt work with this version of node. I can use .concat instead
    //then with apply, we can merge what we have with what we already got, eliminating duplicates
    
    return array.concat.apply([], array);
    
  }
  
  //P: will be an array of arrays. seems like it will always be an array
  // R: return an array representing all arrays combined
  // E: [[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]