// Haskell has some useful functions for dealing with lists:

// $ ghci
// GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
// λ head [1,2,3,4,5]
// 1
// λ tail [1,2,3,4,5]
// [2,3,4,5]
// λ init [1,2,3,4,5]
// [1,2,3,4]
// λ last [1,2,3,4,5]
// 5
// Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:

// | HEAD | <----------- TAIL ------------> |
// [  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
// | <----------- INIT ------------> | LAST |

// head [x] = x
// tail [x] = []
// init [x] = []
// last [x] = x
// Here's how I expect the functions to be called in your language:

// head([1,2,3,4,5]); => 1
// tail([1,2,3,4,5]); => [2,3,4,5]
// Most tests consist of 100 randomly generated arrays, each with four tests, one for each operation. There are 400 tests overall. No empty arrays will be given. Haskell has QuickCheck tests

// TODO: implement the four functions specified.


//for head, just return array[0]
function head(array) {
    return array[0]
  }
  
  //for tail, return array.slice(1 to get all but first element)
  
  function tail(array) {
    return array.slice(1)
  }
  //for init, return array.slice all but last element
  
  function init (array) {
    return array.slice(0,-1)
  }
  
  //for last, get array arr.length-1 to get last element
  
  function last (array) {
    return array[array.length - 1]
  }
  
  
  //P: will always be an array for all 4 functions
  // R: return an array. for head, return first element of arr. for tail, return elements after first. for init, return all but last element. 
  // for last, return last element
  //E: last [1,2,3] => 3