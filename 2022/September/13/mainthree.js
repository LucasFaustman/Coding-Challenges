// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.



function cubeOdd(arr) {

    //first check if every element in array is number, if not return undefined
      if (arr.map(Number).includes(NaN)) {
        return undefined
      }
      
      //map through array and cube everything, then filter out ones that arent odd, then reduce
      
      return arr.map(element => element**3).filter(element => element % 2 !== 0).reduce((acc,num) => acc + num,0)
    }
    
    
    
    //P: will be an array. seems like array will always be an array. will contain both letters and numbers possibly
    // R: return a sum of the odd numbers within the array after cubing the initial numbers
    // E: [1,2,3,4] => [1,8,27,64] -> 27 + 1 = 28