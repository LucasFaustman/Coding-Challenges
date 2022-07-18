// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

function take(arr, n) {
    // I can probably just use a quick slice method. starts at 0, ends at n
    return arr.slice(0,n)
  }
  
  // P: will be an array and an integer. array will always be an array, integer always an integer
  // R: return an array representing the first n elements of the array
  // E:[1,2,3,4,5], 3 => [1,2,3]