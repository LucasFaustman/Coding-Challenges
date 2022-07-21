// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.

function rowWeights(array){
    //I can create 2 new arrays that represent each team. i can use the filter method to get teams based on index
  //   use reduce to get total weight inside arrays
    
    let teamOne = array.filter((element,index) => index % 2 === 0).reduce((acc,num) => acc + num,0)
    let teamTwo = array.filter((element,index) => index % 2 !== 0).reduce((acc,num) => acc + num,0)
    
  //   just return both team weight numbers inside of an array
    return [teamOne,teamTwo]
  }
  
  // P: a single array with positive integers. all numbers will be positive, array size is at least 1
  // R: return 2 arrays. one representing the total weight of team 1, second is total weight of team 2