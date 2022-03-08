
// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

// Simples!


function fixTheMeerkat(arr) {
    // Iterate through array. Switch around index 0 with index two and return the arr
   //   I can create a new arr with 3 elements. place elements into array. If 3rd element
   //   in original array, place in frist and vice verse.
     
     let newArr = ['','','']
     
     for(let i = 0; i < arr.length; i++) {
       if (i === 0) {
         newArr[2] += arr[i]
       } else if (i === 1) {
         newArr[1] += arr[i]
       } else if (i === 2) {
         newArr[0] += arr[i]
       }
     }
     return newArr
   }
   
   // P: Array that always has three values.(tail, body,head)
   // R: Return An array with the right way around, head body tail
   // E: [tail, body, head] => [head,body,tail]