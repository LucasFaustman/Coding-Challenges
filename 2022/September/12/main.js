// In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

// pairs([1,2,5,8,-4,-3,7,6,5]) = 3
// The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
// --the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
// --the second pair is (5,8) and are not consecutive
// --the third pair is (-4,-3), consecutive. Count = 2
// --the fourth pair is (7,6), also consecutive. Count = 3. 
// --the last digit has no pair, so we ignore.
// More examples in the test cases.



function pairs(ar){
  
    //first declare num variable
     let newNum = 0
     
     //then for loop that goes through array
     //array goes up by 2 each time for pairs
     for (let i = 0; i < ar.length; i = i+2) {
       //if ar[i+1] === ar[i] + 1 orr ar[i+1] === ar[i] - 1, newNum++
       
       if (ar[i+1] === ar[i] + 1 || ar[i+1] === ar[i] - 1) {
         newNum++
       }
     }
     //return newNum
     return newNum
   };
   
   //P: will be an array. seems like always an array
   // R: return an integer representing the number of consecutive pairs are in the array, either descending or ascending
   // E: ([1,2,5,8,-4,-3,7,6,5]) => 3, because 1,2 , -4,-3 . amd 6,5 are consecutive pairs