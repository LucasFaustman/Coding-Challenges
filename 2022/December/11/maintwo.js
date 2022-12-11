// Array Addition I                                                                   
// Function ArrayAdditionI(arr) will take an array 
//  of numbers stored in arr and return the string true if any combination of numbers   
// in the array can be added up to equal the largest number in the array, otherwise    
// return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the      
// output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, 
// will not contain all the same elements, and may contain negative numbers.       

function ArrayAdditionI(arr) { 

    //sort the array
    arr.sort((a,b) => a - b)
    //get the max num
    let maxNum = arr.pop();
    //let our total equal 0
    let total = 0;
  
    //loop through arr 
    for (var i = 0; i < arr.length; i++){
      //add current iteration to total
      total += arr[i];
      //then first inner loop
      for (var j = 0; j < arr.length; j++){
        //if our iteration in j does not equal i, add j to total
        if (i != j) {
          total += arr[j];
          //if our total is max num, return true
          if (total == maxNum) {
            return true;
          }
        }
      }
  
      //second inner loop
        
      for (var k = 0; k < arr.length; k++) {
        //same process as above, but with k! minus our iteration from our total to find descending combinations
        if (i != k) {
          total -= arr[k];
          if (total == maxNum) {
            return true;
          }
        }
      }
      //no solutons with current iteration will work, move onto next num
      total = 0;
    }
      
    return false; 
           
  }
  
  
  console.log(ArrayAdditionI([1,3,5,7]), false)
  console.log(ArrayAdditionI([23,10,5,-1,8]),true)
  console.log(ArrayAdditionI([-1,12,5,8]), true)
  