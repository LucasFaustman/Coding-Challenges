// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


function high(x){

    //   first we need to make the string uppercase so I can get the correct charcode, and also split so the loop gets all numbers in a word
     let uppercaseStr = x.toUpperCase()
    
    //  then declare a new arr to contain all the numbers
     
     let newArr = []
     
     for (let i = 0; i < uppercaseStr.length; i++) {
    //    push alphabet position of iteration to newarr
       newArr.push(uppercaseStr.charCodeAt(i) - 64 + ' ')
    
       
       }
    //   declare a variable containing numbers of each letter in each word, getting rid of the spaces with are -32
      
     let newArrOfNumbers = newArr.join('').split(-32)
     
    // then sum the points in each word using reduce
     
     let summedWordPoints = newArrOfNumbers.map(element =>  element.split(' ').map(Number).reduce((acc,num) => acc + num))
    //  get the index of the highest point count
      
     let indexOfHighest = summedWordPoints.indexOf(Math.max(...summedWordPoints))
    //  return index of original string
      
      return x.split(' ')[indexOfHighest]
      
    }
    
    // P: will be a string of words. all lowercase and all inputs will be valid
    // R: return a string representing the highest scoring word. score is based on alphabet position(ex. A => 1, b> 2, etc)
    // E: 'Oh man I need a taxi to UBC' => 'taxi'