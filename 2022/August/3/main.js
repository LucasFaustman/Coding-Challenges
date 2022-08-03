// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. 

function tripleTrouble(one, two, three){
    //declare a string containing the result
    let string = ''
    
    //since all inputs have the same length, I can use a for loop that starts at the first parameter, and will work for all other
  //   parameters
    
    for (let i = 0; i < one.length; i++) {
    //each iteration, get one[i],two[i],and three[i] and + it to the newstr
      string += one[i] + two[i] + three[i]
    }
    
  //   return string
    
    return string
   }
  
  // P: 3 letters. unclear if they will always be letters, but it says that all inputs will be the same length
  // R: return a string representing the combination of all the letters of the 3 inputted strings in groups. gets first letter
  // of each word then combines, 2 letter then combines, etc.
  // E: 'ba','ca','gt' => 'bcgaat'