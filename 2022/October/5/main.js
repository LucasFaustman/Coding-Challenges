// Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".



function evenChars(string) {
    //if length is greater than 2 or over 100, return invalid string
      
      if (string.length < 2 || string.length > 100) {
        return 'invalid string'
      }
      
      //then split, filter through array and if index % 2 !== 0
      
      return string.split('').filter((element,index) => index % 2 !== 0)
    }
    
    //Will be a string. string might be invalid. string might have letters, numbers, symbols
    //Return an array of all even characters from the string. if string is less than 2 or more than 100 length, return invalid string
    //"1234" -> ["2", "4"]