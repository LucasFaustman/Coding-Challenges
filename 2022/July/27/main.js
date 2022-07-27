// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".


function getDrinkByProfession(param){

    //   convert param to have first letter uppercase, then next letters lowercase
      
      let newParam = param.split(' ').map(element => element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()).join(' ')
    //   I can probably make a switch statement here. Might be a little tedious and long to make an object
      
    
      switch (newParam) {
          case 'Jabroni':
            return 'Patron Tequila'
            break;
          case 'School Counselor':
            return 'Anything with Alcohol'
            break;
          case 'Programmer' :
            return 'Hipster Craft Beer'
            break;
          case 'Bike Gang Member':
            return 'Moonshine'
            break;
          case 'Politician':
            return 'Your tax dollars'
            break;
          case 'Rapper':
            return 'Cristal'
            break;
          default:
            return 'Beer'
      }
    }
    
    // P Will be a string. might be capitalized weirdly
    // R: return a string representing the appropriate output from the question
    // E: 'rapper'-> 'Cristal'