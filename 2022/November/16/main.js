// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// A few examples:

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
// If the average length is not an integer, use Math.round().
// The input array's length > 1



//Will be an array of strings. unclear if always array of strings, or maybe numbers, symbols etc. Maybe not valid!
//Return a new array which will differ in what the length of each element is, depending on the average length of elements in prev array
//E// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3

function arrStringManip(array) {
    //average length first by using reduce
    //may through each element, just get first index
    //then map again, repeat average length amount of times
  
    let avgLength = Math.round(array.reduce((acc,string) => acc + string.length,0) / array.length)
  
    return array.map(string => string[0]).map(element => element.repeat(avgLength))
  }