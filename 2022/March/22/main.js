
// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).



function twiceAsOld(dadYearsOld, sonYearsOld) {
    // Maybe do this in a more simple math problem. 
    //   2 * sonYears old to represent double. Minus this from dad Years old.
    // Return math.abs to make sure it's a positive number
      
      return Math.abs(dadYearsOld - 2 * sonYearsOld)
    
    
    }
    
    // P: 2 parameters. It doesn't say what exactly will be passed in, but I'll assume a positive number since years is being passed in.
    // R: Return a number. Number will be how many years ago the father was twice as old as son
    // E: 36,7 => 22 years ago(when dad was 14.)

