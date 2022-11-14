// You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers.

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.


//Taking in an array of 3 integers. unclear if always will be integers, positive or negative, valid array, any strings potentially, symbols

//Return an integer representing the index of the middle number of array of nums when sorted
//E[1,5,3] => 2 because 3 is the middle number and the index is 3
//[100,3,200] => 0 because 100 is the middle num and its index is 0


function gimme(array) {
    //sort method and assign to a variable
    //then find the index of og array at 2nd element of our created array
    let newSortedArr = [...array].sort((a,b) => a - b)
  
    return array.indexOf(newSortedArr[1])
  }