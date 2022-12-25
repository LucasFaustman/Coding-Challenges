// Write a function that doubles every second integer in a list, starting from the left.


function doubleEveryOther(a) {
    //map method
    return a.map((element,index) => index % 2 !== 0 ? element * 2 : element)
  }
  
  //Will be an array. unclear if always will be array. array of integers, but unclear if never
  //floats, positive and negative numbers. unclear if always valid
  //Return a new array where every second integer is doubled
  //E: [1,2,3,4] => [1,4,3,8]
  //E: [2,4,6,8] => [1,8,6,16]