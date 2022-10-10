// When provided with a String, capitalize all vowels



function swap (string) {
    //first declare an array of vowels
    let newArr = ['a','e','i','o','u']
    
    //then map through array. if .newArrincludes element, capitalize element. if not return element
    
    return string.split('').map((element,index) => newArr.includes(element) ? element.toUpperCase() : element).join('')
  }
  
  //Will be a string. seems like always a string. will contain letters
  //Return a new string with all vowels capitalized
  // "Hello World!" => 'HEllO WOrld!'