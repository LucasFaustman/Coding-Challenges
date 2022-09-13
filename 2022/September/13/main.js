// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes
// Array/list will contain positives only .
// Array/list will always have even size

function minSum(arr) {

    //sort, then split the array into 2 halves. one will be first half of array, second will be second half
    
    let sortedArr = arr.sort((a,b) => a - b)
    
    let firstHalf = arr.slice(0,arr.length/2)
    //reverse second half so biggest number is at beginning
      let secondHalf = arr.slice(arr.length/2).reverse()
      //create sum variable
      
      let sum = 0
      
      //then a for loop
      
      for (let i = 0; i < firstHalf.length; i++) {
  
        //sum += firstHalf * secondHalf
        sum += firstHalf[i] * secondHalf[i]
      }
    
    //return sum
    
    return sum
  
  }
  
  // P: Will be an array of integers. seems like will always be an array of integers. only positives. always even!
  // R: return min sum which is obtained by summing each two integer products
  // E: [5,4,2,3] => 22 because 5*2 + 3*4 = 22