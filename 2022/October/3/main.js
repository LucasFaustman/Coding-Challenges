// Write a function

// vowel2index(str)
// that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.


// Your function should be case insensitive to the vowels.

function vowel2index(str) {
    //vowels is a e i o u
   let vowelsArr = ['a','e','i','o','u']
   
   //then split then map through array
   
   return str.split('').map((element,index) => vowelsArr.includes(element.toLowerCase()) ? `${index + 1}` : element).join('')
 }
 
 //Will be a string. might be caps or no caps. seems like it might be characters or numbers. seems like always valid string. might be empty
 //Return a new string with vowels in string replaced by their index + 1
 //E'this is my string'),'th3s 6s my str15ng'