// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

// Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.

function partlist(arr) {
    //For loop?
  //first create new array to return
  
  let newArr = []
  
  //then for loop.\
  for (let i = 1; i < arr.length; i++) {

    //first end will be arr.slice(0 to i) then join
    
    let firstEnd = arr.slice(0,i).join(' ')
    
    //second end will be everything remaining after i then joim
    let secondEnd = arr.slice(i).join(' ')
    
    //push the first and second end as seperate elements
    
    newArr.push([firstEnd, secondEnd])
  }
  
  //return newArr
  
  return newArr
}

//P: will be an array. seems like it will always be an array
// R: return an array which represents all the ways we can divide the array of at least 2 elements into two non empty parts
//E:["I", "wish", "I", "hadn't", "come"] => 
//[["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]]