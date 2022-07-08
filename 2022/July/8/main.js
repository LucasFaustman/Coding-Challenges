// Write a function that returns a string in which firstname is swapped with last name.

function nameShuffler(str){
    //   I can maybe just reverse the str?
      
      return str.split(' ').reverse().join(' ')
    }
    
    // P: will be a string with 2 words
    // R: the same string but with the 2 words swapped
    // E: lucas faustman => faustman lucas