// Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

// "..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.



function  calculateAge(yearOne,yearTwo) {
    //   I can use a couple of conditionals here
    //   if year one is equal to year 2, return you will be born this very year
      if (yearOne === yearTwo) {
        return 'You were born this very year!'
    //    if year one is greater than 2, return you will be born in __ years. if equal to one, do singular. i can use ternary for this
      } else if (yearOne > yearTwo) {
        return yearOne - yearTwo === 1 ? `You will be born in 1 year.` : `You will be born in ${yearOne - yearTwo} years.`
    //     same conditional for but other way around. if year 2 greater than 1, they will be __ years old
      } else if (yearOne < yearTwo) {
        return yearTwo - yearOne === 1 ? `You are 1 year old.` : `You are ${yearTwo - yearOne} years old.`
      }
      
    // enter your code here.
    
    }
    
    // P: will be 2 positive integers
    // R: return a string representing the age they will be, when theyll be born, or you were bornm on this year
    // E: 1999, 2022 => You are 23 years old.