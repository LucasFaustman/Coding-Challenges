// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.



function check(a,x){
    //We can use arr.includes for this
    
  
    return a.includes(x)
    
  };
  
  //P: first param will be an array Can contain numbers or strings. 2 parameters, second will be a string or number
  //. seems like it will always be a valid param
  // R: return true if the second parameter is found in array
  // E: [1,2,4,5],'find' => false because find isnt in the array