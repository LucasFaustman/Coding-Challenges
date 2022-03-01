// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
    //   I can use a series of arr methods here. First split the string with -. then map to get first char, upper
    // case if index is greater than 0, then add the rest of the lower case string, then join everything back
      
      if (str.includes('-')) {
      return str.split('-').map(word => str.indexOf(word) > 0  ? word.charAt(0).toUpperCase() + word.slice(1)
                                .toLowerCase(): word
    ).join('')
    }
      
      else if (str.includes('_')) {
      return str.split('_').map(word => str.indexOf(word) > 0 ? word.charAt(0).toUpperCase() + word.slice(1)
                                .toLowerCase(): word
    ).join('')
      }
      else
        return ''
    }
    
    // P: Will always be a string seperated by dashes
    // R: return a string in camelcase
    // E:the-stealth-warrior => theSteathWarrior