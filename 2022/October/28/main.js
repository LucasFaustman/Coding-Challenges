// Task
// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

// Notes
// Array/list size is at least 2 .

// Array/list's numbers Will be only Positives

// Repetition of numbers in the array/list could occur.

function productArray(numbers){
    let newArr = []
    
    for (let i = 0; i < numbers.length; i++) {
      let result = 1
      for (let j = 0; j < numbers.length; j++) {
        if (i !== j) {
        result = numbers[j] * result
          }
      }
      newArr.push(result)
    }
    
    return newArr
  }
  
  //Will be an array of numbers. always will be positive numbers, not funny business. repitiion can occur. array size will always be at least 2
  //Return a new array of the same size such that each element is equal to the product of all elements except our own element
  //productArray ({1,5,2}) ==> return {10,2,5}