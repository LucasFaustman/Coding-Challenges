// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(words){

    // if word is empty, return empty str
      let newArr = []
      if (!words) {
        return ''
      }
    //   split the string into an array
      
    let splittedWords = words.split(' ')
    // create for loop
    
    for (let i = 1; i <= splittedWords.length; i++) {
    //   create variable. filter out splittedWords array with words just including the position number
      let it = splittedWords.filter(word => word.includes(i.toString()))
      newArr.push(it)
    }
    //  return array to string
      return newArr.join(' ')
    
    }
    
    // P: Parameter will be a string. Sometimes string might be empty.
    // R: Return string in place where numbers show up. 
    // E: is2 this1 te4st a3 => this1 is2 a3 te4st