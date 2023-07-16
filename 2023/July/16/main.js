// You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

// If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

// An example should clarify:

// 'taxi' would become 'atix' 'taxis' would become 'atxsi'

function insideOut(x){
    //create new string to return
    let res = ""
    //first split the string into an array
    x = x.split(' ')
    
    
    //quadratic
    for (let word of x) {
      //get mid point
      let middle = Math.floor(word.length / 2)
      //if word length is even
      if (word.length % 2 === 0) {
            //get two halves and reverse each half, and add to our string
            
            let leftSideReversed = word.split('').slice(0,middle).reverse().join('')
            let rightSideReversed = word.split('').slice(middle).reverse().join('')
            res += (leftSideReversed + rightSideReversed + ' ')
        } else {
          //get both halves besides the middle
          //and both haves, plus the middle inbetween
          let leftSideReversed = word.split('').slice(0,middle).reverse().join('')
            let rightSideReversed = word.split('').slice(middle+1).reverse().join('')
            res += (leftSideReversed + word[middle] + rightSideReversed + ' ')
        }
  
      
    }
    
    return res.slice(0, -1);
  
  }
  
  //Will be a string of words. unclear whether there will always be a valid string or never
  //an empty string. might be even or odd length
  
  //Return the same string, but with each word evened out. internal letters will move out, external
  //leters will move torward the center
  
  //if word is even lengthed, all letters will move. if odd, expected to leave the middle letter
  //where it is
  
  //E: 'taxi' => 'atix'