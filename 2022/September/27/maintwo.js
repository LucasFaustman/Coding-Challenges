// The objective is to return all pairs of integers from a given array of integers that have a difference of 2.

// The result array should be sorted in ascending order of values.

// Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.

function twosDifference(input){
    //I can probably do a nested for loop here, since we need to check every pair, not just pairs that are together
     
     //first declare newarr to return
     
     let newArr = []
     
     //then for loop
     
     for (let i = 0; i < input.length;i++) {
       let iVal = input[i]
       
       for (let j = 0; j < input.length; j++) {
         //if isVal - input[j] == 2, push j and iVal to newArr as an array
         if (iVal - input[j] == 2) {
   
           newArr.push([input[j], iVal])
         }
       }
     }
     
     //we just need to sort in ascending order then return
     
     return newArr.sort((a,b) => a[0] - b[0])
   }
   
   //Will be an array. no duplicate integers. will be unordered, but order won't matter. unclear if always input or will always contain integers
   //Return an array of nested arrays that represents all pairs of integers that have a difference of 2
   //[1,2,3,4]) => [[1,3],[2,4]]