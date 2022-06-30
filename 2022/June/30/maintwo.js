// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

function mxdiflg(a1, a2) {
    // first make a conditional that if a1 or a2 is empty, then return -1
  
  if (!a1.length || !a1 || !a2.length || !a2) {
    return -1
  }
  
//   we can probably sort each array and assign to a variable
  
  let newAone = a1.sort((a,b) => b.length - a.length)
  let newAtwo = a2.sort((a,b) => b.length - a.length)
  
// we are then going to create a conditional to see if newAone's first index - newAtwo last index is > than vice versa. 
// if so, 
// subract length of newAone[0] from newAtwo[length -1]


  return newAone[0].length - newAtwo[newAtwo.length -1].length > newAtwo[0].length - newAone[newAone.length -1].length ?
   Math.abs(newAone[0].length - newAtwo[newAtwo.length -1].length): 
  Math.abs(newAtwo[0].length - newAone[newAone.length -1].length)
  

}

// P: two arrays. either or both arrays might be empty
// Return a number symbolizing the max difference between a random string in a1 and a2
// E:["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"],
// ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"] -> 13, because oox is smallest, cccooommaaqqoxii is biggest and diff between is 13