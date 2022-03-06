// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples(Input --> Output)

function minMax(arr){
    //   I can create a new array with 2 elements, 
    //   The sort the array using sort
    //   then place the sorted array elements at 0 and length-1 into new arr then return newarr
      let newArr = [0,0]
      
      let sortedArr = arr.sort((a,b) => a-b)
      
      newArr[0] = sortedArr[0]
      newArr[1] = sortedArr[sortedArr.length -1]
      
      return newArr
    
    }
    
    // P: Parameter is an array. Will always have at least one value and will always be an array
    // R: Return the highest and lowest value of the array in an array. Lowest number in index 0, high in index 1
    // E: [1,2,3,4,5] => [1,5]