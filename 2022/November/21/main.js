// In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.


function solve(arr){
    //create a new arr
    let newArr = []
    //sort array
    arr.sort((a,b) => b-a)
    //for loop
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i])
      newArr.push(arr[arr.length-i-1])
    }
  return newArr.slice(0,arr.length)
};

//Will be an array of numbers. unclear if always numbers, maybe strings, symbols, etc
//Return a new array where elements are rearranged so the first max value is followed by first minimu, followed
//by second max value, then second min value, etc
//E[15,11,10,7,12]) = [15,7,12,10,11]