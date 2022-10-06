// Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).



function sumOfABeach(beach) {
  

    //declare new num
    let num = 0
    
    //make string lowercase then split
    let newBeachArr = beach.toLowerCase().split('')
    
  //for loop  
    for (let i = 0; i < newBeachArr.length; i++) {
      //conditional. if element.slice(our index, index + 3).join is sun, return num++
      if (newBeachArr.slice(i, i + 3).join('') === 'sun') {
            num++
        //same thing for other words, just with slice changed
      } else if (newBeachArr.slice(i, i + 4).join('') === 'fish' || newBeachArr.slice(i, i + 4).join('') === 'sand') {
        num++
      } else if (newBeachArr.slice(i, i + 5).join('') === 'water') {
        num++
      }
    }
    
    //return num
    
    return num
  }
  
  //Will be a string. string will be letters or numbers. might be symbols too. unsure if always valid or never empty. might be upper or lower case
  //Return an integer representing the amount of times the word 'Fish','Sand','Water','Sun' appears in string without overlapping. regardless of case
  //E: "gOfIshsunesunFiSh"