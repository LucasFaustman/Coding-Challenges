// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    //   I can first create a new variable that sorts the array
      let newAgeArr = ages.sort((a,b) => b-a)
      
    //   then return a new array grabbing values from newAgeArr
      return [newAgeArr[1], newAgeArr[0]]
    
    }
    
    // P: An array of numbers. Will always be an array
    // R: A new array containing the highest and second highest number inside the array
    // E; [1,2,3,4,5] => [4,5]