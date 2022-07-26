// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

function stringClean(s){
    // i can probably split the string 
  //   filter out elements that are a number. i can do this using the isNaN method
  //   also need to grab spaces. i can add an or statement
  //   then join the string
    
    return s.split('').filter(element => element === ' ' || isNaN(element)).join("")
  
    
  
  }
  
  
  //p: will be a string.
  // r: return a string will all numbers removed
  // e: "1ucas" -> "ucas"