// In this Kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

function solve(arr){
    //object and for loop
    let newObj = {}
    
    for (let i = 0; i < arr.length; i++) {
      if (newObj[arr[i]]) {
        newObj[arr[i]]++
      } else {
        newObj[arr[i]] = 1
      }
    }
    return arr.sort((a,b) => newObj[a] === newObj[b] ? a - b : newObj[b] - newObj[a])
  }
  
  //Will be an array of numbers. unclear if always will be an array of numbers. might be symbols, strings, etc. seems unlikely though
  //Return a new array sorted by decreasing frequency of elements. if two elements have same freq, sort by increasing value
  //[2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]