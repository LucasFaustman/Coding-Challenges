// Given an integer n and two other values, build an array of size n filled with these two values alternating.

function alternate(n, firstValue, secondValue){
    //create a new array
    let res = [];
      
    //for loop
    //if i is mod 2 !== 0, push first val
    //else push second
    for (let i= 1; i <= n; i++) {
        if (i % 2 !== 0) {
          res.push(firstValue)
        } else {
          res.push(secondValue)
        }
    }
    
    return res;
  }
  
  //3 params. One will be n. n will always be an integer. unclear if always positive, negative, or 0
  
  //other two params might be anything, from a string, to boolean. unclear if ever will be an array or an object
  
  //Return an array of size n with the values of first value and second interchanging
  
  //5, true, false     -->  [true, false, true, false, true]
  // 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
  // 0, "one", "two"    -->  []