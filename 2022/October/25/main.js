// Return the number of unique arrays that can be formed by picking exactly one element from each subarray.


//Will be a nested array of arrays. arrays will always have numbers inside of them, no funny business!
//Return a positive integer representing the number of unique arrays that can be formed by picking exactly one number or element from each sub array

function solve(arr) {
    //map and get new set for each array to get unique items
  
    return arr.map(element => [...new Set(element)]).reduce((acc,array) => acc * array.length, 1)
  }
  
  console.log(solve([[1,2],[4],[5,6]]),4)
  console.log(solve([[1,2],[4,4],[5,6,6]]),4)
  console.log(solve([[1,2],[3,4],[5,6]]),8)
  console.log(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)
  