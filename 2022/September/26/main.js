// Write a program that outputs the top n elements from a list.

function largest(n,xs){
    // I can probably just sort the array then slice
  let newSortedArr = xs.sort((a,b) => b-a)
  
  //just need to reverse since the array is in opposite order
  return newSortedArr.slice(0,n).reverse()
}

//Will be an array and a single integer. unclear if either will always be valid. integer might be 0
//Return an array that outputs the top n elements from the array. will be sorted in ascending order
//2, [7,6,5,4,3,2,1] => [6,7]