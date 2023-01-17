// You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.



function deepCount(a){
  
    //we get the length of our total
  let sumTotal = a.length;
  
    //for each element of a
      for (let element of a)
        //if element is an array
          if (Array.isArray(element))
            //call deepcount recursively and add to sum total
              sumTotal += deepCount(element);
  //return sum total
      return sumTotal;
  }
  
  
  
  //Will be an array. always will be given an array, no funny business. array might contain any character
  //Return a number representing the number of ALL elements within the array, including any nested array
  //E: [1,2,3] => 3
  //["x","y",["z"]] => 4
  // [1, 2, [3, 4, [5]]]  =>  7