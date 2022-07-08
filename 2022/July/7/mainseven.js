// Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

function generateRange(min, max, step){
  
    //   first need to declare a variable
      
      let newArr = []
      
    //   then create a for loop. starts at min, ends at max, goes up by step
      
      for (let i = min; i <= max; i+=step) {
    //     push i
        newArr.push(i)
      }
      
    //   then return arr
    return newArr
    }
    
    // P: 3 numbers. min will be less than max. step is greater than 0. always will be integers
    // R: return an array representing the range of integers
    // 2,10,2 -> [2,4,6,8,10]